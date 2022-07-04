import { injectable } from 'inversify';
import { BaseService } from '@tdo-ui/core/services';
import { ApiPaths } from '@my-work/constants';
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  GoogleLoginRequest,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from '@my-work/models';
import qs from 'query-string';

export interface IAuthServices {
  login: (params: LoginRequest) => Promise<LoginResponse>;
  register: (params: RegisterRequest) => Promise<RegisterResponse>;
  forgotPassword: (
    params: ForgotPasswordRequest
  ) => Promise<ForgotPasswordResponse>;
  resetPassword: (
    params: ResetPasswordRequest
  ) => Promise<ResetPasswordResponse>;
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

  forgotPassword(
    params: ForgotPasswordRequest
  ): Promise<ForgotPasswordResponse> {
    return super.post<ForgotPasswordRequest, ForgotPasswordResponse>(
      ApiPaths.auth.forgotPassword,
      params
    );
  }

  resetPassword(params: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return super.post<ResetPasswordRequest, ResetPasswordResponse>(
      ApiPaths.auth.resetPassword,
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
