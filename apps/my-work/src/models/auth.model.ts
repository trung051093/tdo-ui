export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  data: {
    token: string;
    expiry: number;
    created: number;
  };
};

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterResponse = boolean;

export type ForgotPasswordRequest = {
  email: string;
  forgotPasswordUri?: string;
};

export type ForgotPasswordResponse = boolean;

export type ResetPasswordRequest = {
  email: string;
  password: string;
  token: string;
};

export type ResetPasswordResponse = boolean;

export type GoogleLoginRequest = {
  redirectUri: string;
};
