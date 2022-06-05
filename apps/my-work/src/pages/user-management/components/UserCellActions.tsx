import { HStack, Button } from '@chakra-ui/react';
import { User } from '@my-work/models';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface UserCellActionsProps {
  user: User;
}

export const UserCellActions = ({ user }: UserCellActionsProps) => {
  const handleEdit = () => {
    alert('Edit UserId: ' + user.id);
  };

  const handleDelete = () => {
    alert('Delete UserId: ' + user.id);
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
    </HStack>
  );
};
