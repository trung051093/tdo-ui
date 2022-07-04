import { DefaultLayout } from '@my-work/layouts/Default';
import { useAuthLoginToken } from '@my-work/hooks';

export const LoginToken = () => {
  useAuthLoginToken()

  return <DefaultLayout>Loading...</DefaultLayout>;
};
