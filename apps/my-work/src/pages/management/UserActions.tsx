import { Box, Button } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

export const UserActions = () => {
  return (
    <Box>
      <Button leftIcon={<FiPlus />}>Create</Button>
    </Box>
  );
};
