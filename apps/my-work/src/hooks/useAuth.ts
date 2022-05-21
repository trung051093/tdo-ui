import { useMutation, useQueryClient } from 'react-query'
import { LoginRequest, RegisterRequest } from '@my-work/models'
import { IAuthServices } from '@my-work/serivces'
import { useContainer, ServiceTypes } from './useContainer'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { CookieServices, CookiesName } from '@tdo-ui/core'
import { ROUTES } from '@my-work/constants'

export const QUERY_KEYS = {
    auth: 'auth'
}

export const useAuthLogin = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { login } = useContainer<IAuthServices>(ServiceTypes.authServices)
    const toast = useToast()

    return useMutation((params: LoginRequest) => login(params), {
        onSuccess: (response) => {
            const { data } = response
            CookieServices.setCookie(CookiesName.ACCESS_TOKEN, data.token, data.expiry * 1000);
            queryClient.setQueryData(QUERY_KEYS.auth, data);
            toast({
                title: 'Login Successfully !',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            navigate(ROUTES.Home)
        },
        onError: ({ message }) => {
            toast({
                title: 'Login failure !',
                status: 'error',
                description: message || '',
                duration: 3000,
                isClosable: true,
            })
        }
    })
}

export const useSignOut = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const handleSignout = () => {
        CookieServices.deleteTokens();
        queryClient.removeQueries(QUERY_KEYS.auth);
        navigate(ROUTES.Authentication.LOGIN)
    }

    return {
        handleSignout
    }
}


export const useAuthRegister = () => {
    const navigate = useNavigate()
    const { register } = useContainer<IAuthServices>(ServiceTypes.authServices)
    const toast = useToast()

    return useMutation((params: RegisterRequest) => register(params), {
        onSuccess: (data) => {
            navigate(ROUTES.Authentication.LOGIN)
            toast({
                title: 'Register Successfully !',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        },
        onError: ({ message }) => {
            toast({
                title: 'Register failure !',
                status: 'error',
                description: message || '',
                duration: 3000,
                isClosable: true,
            })
        }
    })
}