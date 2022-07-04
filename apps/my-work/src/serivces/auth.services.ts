import { injectable } from 'inversify';
import { BaseService } from '@tdo-ui/core/services';
import { ApiPaths } from '@my-work/constants';
import {
  GoogleLoginRequest,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@my-work/models';
import qs from 'query-string';

export interface IAuthServices {
  login: (params: LoginRequest) => Promise<LoginResponse>;
  register: (params: RegisterRequest) => Promise<RegisterResponse>;
  googleLoginLink: (params: GoogleLoginRequest) => string;
}

@injectable()
export class AuthServices extends BaseService implements IAuthServices {
  login(params: LoginRequest): Promise<LoginResponse> {
    return super.post<LoginRequest, LoginResponse>(ApiPaths.auth.login, params);
  }

  register(params: RegisterRequest): Promise<RegisterResponse> {
    return super.post<RegisterRequest, RegisterResponse>(
      ApiPaths.auth.register,
      params
    );
  }

  googleLoginLink(params: GoogleLoginRequest) {
    return qs.stringifyUrl({
      url: ApiPaths.auth.google,
      query: params,
    });
  }
}
