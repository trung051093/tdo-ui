import { Input } from '@chakra-ui/react';
import MainLayout from '../../layouts/Main/MainLayout';
import { UserTable } from './components/UserTable';
import { UserActions } from './UserActions';

export const UserManagement = () => {
  return (
    <MainLayout
      title="User Management"
      leftAction={<Input variant="outline" placeholder="Search" />}
      rightAction={<UserActions />}
    >
      <UserTable />
    </MainLayout>
  );
};
