import { Button, Input } from '@chakra-ui/react';
import MainLayout from '../../layouts/Main/MainLayout';

export const UserManagement = () => {
  return (
    <MainLayout
      title="User Management"
      leftAction={<Input variant="outline" placeholder="Search" />}
      rightAction={<Button>Right Action</Button>}
    >
      User Management
    </MainLayout>
  );
};
