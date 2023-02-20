import { injectable } from 'inversify';
import { Srp, Hash, Mode } from 'js-srp';
import { BaseService } from '@tdo-ui/core/services';
import { ApiPaths } from '@my-work/constants';
import {
  RegisterPayload,
  SrpChallengeRequest,
  SrpChallengeResponse,
  SrpLoginRequest,
  SrpLoginResponse,
  SrpLoginVerifyRequest,
  SrpLoginVerifyResponse,
  SrpLoginGetJwtRequest,
  SrpLoginGetJwtResponse,
  SrpRegisterRequest,
  LoginPayload,
} from '@my-work/models/srp_auth.model';

const srp = new Srp(Mode.GoSRP, Hash.SHA1, 1024);

export interface ISrpAuthServices {
  register(params: RegisterPayload): Promise<void>;
  login(params: LoginPayload): Promise<SrpLoginGetJwtResponse>;
}

@injectable()
export class SrpAuthServices extends BaseService implements ISrpAuthServices {
  challenge = (params: SrpChallengeRequest): Promise<SrpChallengeResponse> => {
    return this.post<SrpChallengeRequest, SrpChallengeResponse>(
      ApiPaths.authSrp.challenge,
      params
    );
  };

  register = async (params: RegisterPayload): Promise<void> => {
    const {
      firstName,
      lastName,
      username,
      password,
      code,
      role,
      session,
      salt,
    } = params;

    const verifier = await srp.verifier(
      Buffer.from(username),
      Buffer.from(password),
    );

    const [ih, vh] = verifier.encode();
    const registerParams: SrpRegisterRequest = {
      verifier: vh,
      verifier_id: ih,
      session: session,
      username: username,
      first_name: firstName,
      last_name: lastName,
      code: code,
      role: role,
      salt: salt,
    };

    return this.post<SrpRegisterRequest, void>(
      ApiPaths.authSrp.register,
      registerParams
    );
  };

  login = async (params: LoginPayload): Promise<SrpLoginGetJwtResponse> => {
    const { username, password } = params;

    const challengeResponse = await this.challenge({ username: username });

    if (!challengeResponse.is_exist) {
      throw new Error('Account is not exist');
    }

    const client = await srp.newClient(
      Buffer.from(username),
      Buffer.from(password)
    );
    const credentials = client.credentials();

    const loginResponse = await this.post<SrpLoginRequest, SrpLoginResponse>(
      ApiPaths.authSrp.login,
      {
        credentials: credentials,
      }
    );

    const [s_salt, s_credentials] = client.parseServerCredentials(
      loginResponse.credentials
    );
    console.log("🚀 ~ file: srp_auth.services.ts:95 ~ SrpAuthServices ~ login= ~ s_credentials", s_credentials)
    console.log("🚀 ~ file: srp_auth.services.ts:97 ~ SrpAuthServices ~ login= ~ s_salt", s_salt)

    const cauth = await client.generate(
      s_salt,
      s_credentials
    );

    const loginVerifyResponse = await this.loginVerify({
      cauth: cauth,
      session: loginResponse.session,
    });

    const serverOk = client.serverOk(loginVerifyResponse.proof);
    if (!serverOk) {
      throw new Error('authenticate failed');
    }

    return this.loginGetJwt({
      raw_key: client.K.toString(),
      session: loginResponse.session,
    });
  };

  loginVerify = (
    params: SrpLoginVerifyRequest
  ): Promise<SrpLoginVerifyResponse> => {
    return this.post<SrpLoginVerifyRequest, SrpLoginVerifyResponse>(
      ApiPaths.authSrp.loginVerify,
      params
    );
  };

  loginGetJwt = (
    params: SrpLoginGetJwtRequest
  ): Promise<SrpLoginGetJwtResponse> => {
    return this.post<SrpLoginGetJwtRequest, SrpLoginGetJwtResponse>(
      ApiPaths.authSrp.loginGetJwt,
      params
    );
  };
}
