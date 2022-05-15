import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {children}
    </Flex>
  );
};

export default DefaultLayout;
