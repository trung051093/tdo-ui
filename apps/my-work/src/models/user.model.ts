import { PaginationReponse, PaginationRequest } from "./pagination.model";

export type UserId = number

export type User = {
    id: UserId;
    firstName: string;
    lastName: string
    email: string;
    address: string;
    company: string;
    birthDate: string;
    gender: string;
    phoneNumber: string;
}

export type SearchUserRequest = PaginationRequest & {
    fields?: string[];
}

export type SearchUserResponse = {
    data: User[]
} & PaginationReponse

export type GetUserRequest = UserId

export type GetUserResponse = User

export type CreateUserRequest = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string;
    company?: string;
    birthDate?: string;
    phoneNumber?: string;
    gender?: string;
}

export type CreateUserResponse = {
    id: UserId
}

export type UpdateUserRequest = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    address?: string;
    company?: string;
    birthDate?: string;
    phoneNumber?: string;
    gender?: string;
}

export type UpdateUserResponse = boolean

export type DeleteUserRequest = UserId

export type DeleteUserResponse = boolean