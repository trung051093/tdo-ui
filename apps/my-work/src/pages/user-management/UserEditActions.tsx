import { HStack, Button } from '@chakra-ui/react';
import { FiSave } from 'react-icons/fi';

export const UserEditActions = () => {
  return (
    <HStack>
      <Button leftIcon={<FiSave />}>Save</Button>
    </HStack>
  );
};
