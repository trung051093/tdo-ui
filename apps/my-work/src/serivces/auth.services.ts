import { BaseService } from '@tdo-ui/core/services'
import { ApiPaths } from '@my-work/constants'
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@my-work/models'
import { injectable } from "inversify";

export interface IAuthServices {
    login: (params: LoginRequest) => Promise<LoginResponse>
    register: (params: RegisterRequest) => Promise<RegisterResponse>
}

@injectable()
export class AuthServices extends BaseService implements IAuthServices {
    login(params: LoginRequest): Promise<LoginResponse> {
        return super.post<LoginRequest, LoginResponse>(ApiPaths.auth.login, params)
    }
    register(params: RegisterRequest): Promise<RegisterResponse> {
        return super.post<RegisterRequest, RegisterResponse>(ApiPaths.auth.register, params)
    }

}