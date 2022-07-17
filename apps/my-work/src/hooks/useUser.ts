import React from 'react'
import { useQuery, useMutation, QueryObserverOptions, useQueryClient } from 'react-query'
import { CreateUserRequest, SearchUserRequest, UpdateUserRequest, UserId } from '@my-work/models'
import { IUserServices } from '@my-work/serivces'
import { useContainer, ServiceTypes } from './useContainer'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@my-work/constants'

const DefaultQueryOptions: QueryObserverOptions = {
    staleTime: 0,
    refetchOnWindowFocus: false
}

export const QUERY_KEYS = {
    user: (id: UserId) => ['user', id],
    userList: (params?: SearchUserRequest) => ['userList', params?.page, params?.limit]
}

export const useSearchUser = (params: SearchUserRequest, options?: QueryObserverOptions) => {
    const [page, setPage] = React.useState(0)
    const [limit, setLimit] = React.useState(100)

    const { searchUser } = useContainer<IUserServices>(ServiceTypes.userServices)

    const combinedOptions = { ...DefaultQueryOptions, ...options } as never;
    const combinedParams = { ...params, page, limit }

    return {
        ...useQuery(QUERY_KEYS.userList(combinedParams), () => searchUser(combinedParams), combinedOptions),
        onChangePage: (page: number) => setPage(page),
        onChangeLimit: (page: number) => setLimit(page)
    }
}

export const useGetUserById = (id: UserId, options?: QueryObserverOptions) => {
    const { getUserById } = useContainer<IUserServices>(ServiceTypes.userServices)
    const combinedOptions = { ...DefaultQueryOptions, ...options } as never;
    return useQuery(QUERY_KEYS.user(id), () => getUserById(id), combinedOptions)
}

export const useDeleteUser = () => {
    const { deleteUser } = useContainer<IUserServices>(ServiceTypes.userServices)
    const toast = useToast()
    const queryClient = useQueryClient()

    return useMutation((id: UserId) => deleteUser(id), {
        onSuccess: () => {
            toast({
                title: 'Delete Successfully !',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            queryClient.invalidateQueries(QUERY_KEYS.userList())
        }
    })
}

export const useCreateUser = () => {
    const { createUser } = useContainer<IUserServices>(ServiceTypes.userServices)
    const toast = useToast()
    const navigate = useNavigate();

    return useMutation((data: CreateUserRequest) => createUser(data), {
        onSuccess: () => {
            toast({
                title: 'Create Successfully !',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            navigate(ROUTES.Users.Management)
        }
    })
}

export const useUpdateUser = () => {
    const { updateUser } = useContainer<IUserServices>(ServiceTypes.userServices)
    const toast = useToast()
    const navigate = useNavigate();

    return useMutation(({ id, data }: {
        id: UserId,
        data: UpdateUserRequest
    }) => {
        return updateUser(id, data)
    }, {
        onSuccess: () => {
            toast({
                title: 'Update Successfully !',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            navigate(ROUTES.Users.Management)
        }
    })
}