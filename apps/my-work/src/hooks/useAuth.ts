import { useMutation, useQueryClient } from 'react-query';
import {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from '@my-work/models';
import { IAuthServices } from '@my-work/serivces';
import { useContainer, ServiceTypes } from './useContainer';
import { useToast } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CookieServices, CookiesName } from '@tdo-ui/core';
import { ROUTES } from '@my-work/constants';
import { useCallback, useEffect } from 'react';
import qs from 'query-string';

export const QUERY_KEYS = {
  auth: 'auth',
};

export const useGoogleLogin = () => {
  const { googleLoginLink } = useContainer<IAuthServices>(
    ServiceTypes.authServices
  );
  const handleGoogleLogin = () => {
    window.location.href = googleLoginLink({
      redirectUri: window.location.origin + ROUTES.Authentication.LOGIN_TOKEN,
    });
  };

  return {
    handleGoogleLogin,
  };
};

export const useAuthLoginToken = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const submitToken = useCallback(
    (token: string, expiry: number) => {
      CookieServices.setCookie(CookiesName.ACCESS_TOKEN, token, expiry * 1000);
      toast({
        title: 'Login Successfully !',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate(ROUTES.Home);
    },
    [navigate, toast]
  );

  useEffect(() => {
    const query = qs.parse(location.search);
    const { token, expiry } = query;
    if (token && expiry) {
      submitToken(token as string, Number(expiry));
    }
  }, [location, submitToken]);

  return {
    submitToken,
  };
};

export const useAuthLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { login } = useContainer<IAuthServices>(ServiceTypes.authServices);
  const toast = useToast();

  return useMutation((params: LoginRequest) => login(params), {
    onSuccess: (response) => {
      const { data } = response;
      CookieServices.setCookie(
        CookiesName.ACCESS_TOKEN,
        data.token,
        data.expiry * 1000
      );
      queryClient.setQueryData(QUERY_KEYS.auth, data);
      toast({
        title: 'Login Successfully !',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate(ROUTES.Home);
    },
    onError: ({ message }) => {
      toast({
        title: 'Login failure !',
        status: 'error',
        description: message || '',
        duration: 3000,
        isClosable: true,
      });
    },
  });
};

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleSignout = () => {
    CookieServices.deleteTokens();
    queryClient.removeQueries(QUERY_KEYS.auth);
    navigate(ROUTES.Authentication.LOGIN);
  };

  return {
    handleSignout,
  };
};

export const useAuthRegister = () => {
  const navigate = useNavigate();
  const { register } = useContainer<IAuthServices>(ServiceTypes.authServices);
  const toast = useToast();

  return useMutation((params: RegisterRequest) => register(params), {
    onSuccess: (data) => {
      navigate(ROUTES.Authentication.LOGIN);
      toast({
        title: 'Register Successfully !',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: ({ message }) => {
      toast({
        title: 'Register failure !',
        status: 'error',
        description: message || '',
        duration: 3000,
        isClosable: true,
      });
    },
  });
};

export const useAuthForgotPassword = () => {
  const { forgotPassword } = useContainer<IAuthServices>(
    ServiceTypes.authServices
  );
  const toast = useToast();

  return useMutation(
    (params: ForgotPasswordRequest) => {
      Object.assign(params, {
        forgotPasswordUri:
          window.location.origin + ROUTES.Authentication.RESET_PASSWORD,
      });
      return forgotPassword(params);
    },
    {
      onError: ({ message }) => {
        toast({
          title: 'Forgot password failure !',
          status: 'error',
          description: message || '',
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );
};

export const useAuthResetPassword = () => {
  const { resetPassword } = useContainer<IAuthServices>(
    ServiceTypes.authServices
  );
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation((params: ResetPasswordRequest) => resetPassword(params), {
    onSuccess: () => {
      navigate(ROUTES.Authentication.LOGIN);
      toast({
        title: 'Reset Password Successfully !',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: ({ message }) => {
      toast({
        title: 'Reset password failure !',
        status: 'error',
        description: message || '',
        duration: 3000,
        isClosable: true,
      });
    },
  });
};
