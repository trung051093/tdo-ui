import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ISrpAuthServices } from '@my-work/serivces/srp_auth.services';
import { ServiceTypes, useContainer } from './useContainer';
import { useToast } from '@chakra-ui/react';
import { LoginPayload, RegisterPayload } from '@my-work/models';
import { CookieServices, CookiesName } from '@tdo-ui/core';
import { ROUTES } from '@my-work/constants';

export const QUERY_KEYS = {
  authSrp: 'authSrp',
};

export const useAuthLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { login } = useContainer<ISrpAuthServices>(
    ServiceTypes.srpAuthServices
  );
  const toast = useToast();

  return useMutation((params: LoginPayload) => login(params), {
    onSuccess: (response) => {
      CookieServices.setCookie(
        CookiesName.ACCESS_TOKEN,
        response.token.access_token,
        1676906855000
      );
      queryClient.setQueryData(QUERY_KEYS.authSrp, response);
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

export const useAuthRegister = () => {
  const { register } = useContainer<ISrpAuthServices>(
    ServiceTypes.srpAuthServices
  );
  const toast = useToast();

  return useMutation((params: RegisterPayload) => register(params), {
    onSuccess: (response) => {
      console.log(
        '🚀 ~ file: useAuthSrp.ts:61 ~ returnuseMutation ~ response',
        response
      );
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
