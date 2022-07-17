import { MainLayout } from '@my-work/layouts';
import { UserForm } from './components/UserForm';
import { UserEditActions } from './UserEditActions';
import { useParams } from 'react-router-dom';

export const UserEdit = () => {
  const { userId } = useParams();

  return (
    <MainLayout
      title={userId ? `User ${userId}` : 'New User'}
      rightAction={<UserEditActions />}
    >
      <UserForm />
    </MainLayout>
  );
};
