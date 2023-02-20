export type SrpChallengeRequest = {
  username: string;
};

export type SrpChallengeResponse = {
  is_exist: boolean;
  salt: string;
  session: string;
};

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  code: string;
  salt: string;
  session: string;
  role: string;
};

export type SrpRegisterRequest = {
  first_name: string;
  last_name: string;
  username: string;
  verifier: string;
  verifier_id: string;
  salt: string;
  code: string;
  role: string;
  session: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type SrpLoginRequest = {
  credentials: string;
};

export type SrpLoginResponse = {
  credentials: string;
  session: string;
};

export type SrpLoginVerifyRequest = {
  cauth: string;
  session: string;
};

export type SrpLoginVerifyResponse = {
  proof: string;
  session: string;
};

export type SrpLoginGetJwtRequest = {
  raw_key: string;
  session: string;
};

export type SrpLoginGetJwtResponse = {
  token: {
    access_token: string;
    refresh_token: string;
  };
};
