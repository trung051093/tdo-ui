import { BaseService } from '@tdo-ui/core/services'
import { ApiPaths } from '@my-work/constants'
import { CreateUserRequest, CreateUserResponse, DeleteUserResponse, GetUserResponse, SearchUserRequest, SearchUserResponse, UpdateUserRequest, UpdateUserResponse, UserId } from '@my-work/models'
import { injectable } from "inversify";

export interface IUserServices {
    getUserById: (id: UserId) => Promise<GetUserResponse>;
    searchUser: (params: SearchUserRequest) => Promise<SearchUserResponse>
    createUser: (data: CreateUserRequest) => Promise<CreateUserResponse>
    updateUser: (id: UserId, data: UpdateUserRequest) => Promise<UpdateUserResponse>
    deleteUser: (id: UserId) => Promise<DeleteUserResponse>
}

@injectable()
export class UserServices extends BaseService implements IUserServices {
    getUserById(id: UserId): Promise<GetUserResponse> {
        return super.get<UserId, GetUserResponse>(ApiPaths.user.get.replace(':id', id.toString()))
    }

    searchUser(params: SearchUserRequest): Promise<SearchUserResponse> {
        const { limit = 1000, page = 1, ...rest } = params
        return super.get<SearchUserRequest, SearchUserResponse>(ApiPaths.user.list, { limit, page, ...rest })
    }

    createUser(data: CreateUserRequest): Promise<CreateUserResponse> {
        return super.post<CreateUserRequest, CreateUserResponse>(ApiPaths.user.create, data)
    }

    updateUser(id: UserId, data: UpdateUserRequest): Promise<UpdateUserResponse> {
        return super.post<UpdateUserRequest, UpdateUserResponse>(ApiPaths.user.update.replace(':id', id.toString()), data)
    }

    deleteUser(id: UserId): Promise<DeleteUserResponse> {
        return super.delete<UserId, DeleteUserResponse>(ApiPaths.user.delete.replace(':id', id.toString()))
    }
}