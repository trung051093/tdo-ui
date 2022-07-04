export type LoginRequest = {
    email: string;
    password: string
}

export type LoginResponse = {
    data: {
        token: string;
        expiry: number;
        created: number;
    }
}

export type RegisterRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export type RegisterResponse = boolean

export type GoogleLoginRequest = {
    redirect: string;
}