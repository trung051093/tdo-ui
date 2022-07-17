import { HStack, Button, useDisclosure } from '@chakra-ui/react';
import { DeleteConfirmDialog } from '@my-work/components/Dialog';
import { ROUTES } from '@my-work/constants';
import { useDeleteUser } from '@my-work/hooks/useUser';
import { User } from '@my-work/models';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface UserCellActionsProps {
  user: User;
}

export const UserCellActions = ({ user }: UserCellActionsProps) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteUser = useDeleteUser();

  const handleEdit = () => {
    navigate(ROUTES.Users.Edit.replace(':userId', user.id.toString()));
  };

  const handleDelete = () => {
    onOpen();
  };

  const onConfirmDelete = async () => {
    await deleteUser.mutateAsync(user.id);
    onClose();
  };

  return (
    <HStack>
      <Button size="xs" leftIcon={<FiEdit />} onClick={handleEdit}>
        Edit
      </Button>
      <Button
        size="xs"
        leftIcon={<FiTrash2 />}
        bg="red.500"
        color="white"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <DeleteConfirmDialog
        isOpen={isOpen}
        isLoading={deleteUser.isLoading}
        title={`Delete User ${user.id}`}
        onClose={onClose}
        onConfirm={onConfirmDelete}
      />
    </HStack>
  );
};
