import { useQuery, QueryObserverOptions } from 'react-query';
import { useContainer, ServiceTypes } from './useContainer';
import { IFileServices } from '@my-work/serivces'

const DefaultQueryOptions: QueryObserverOptions = {
  staleTime: 0,
  refetchOnWindowFocus: false,
};

export const QUERY_KEYS = {
  presignedUrl: () => ['presignedUrl'],
};

export const usePresignedUrl = (options?: QueryObserverOptions) => {
  const { getPresignedUrl } = useContainer<IFileServices>(ServiceTypes.fileServices);

  const combinedOptions = { ...DefaultQueryOptions, ...options } as never;

  return useQuery(
    QUERY_KEYS.presignedUrl(),
    () => getPresignedUrl(),
    combinedOptions
  );
};
