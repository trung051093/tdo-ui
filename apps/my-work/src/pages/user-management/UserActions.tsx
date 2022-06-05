import { HStack, Button } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

export const UserActions = () => {
  return (
    <HStack>
      <Button leftIcon={<FiPlus />}>Create</Button>
    </HStack>
  );
};
