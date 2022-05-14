import { Box, Flex, Spacer } from '@chakra-ui/react';

export interface PageContentProps {
  rightAction?: React.ReactNode;
  leftAction?: React.ReactNode;
  children?: React.ReactNode;
}

export const PageContent = ({
  rightAction,
  leftAction,
  children,
}: PageContentProps) => {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <Flex h="10" alignItems="center" my="2" justifyContent="space-between">
        <Box w="50%" h="10">
          {leftAction}
        </Box>
        <Spacer />
        <Box w="50%" h="10">
          <Flex justifyContent="flex-end">{rightAction}</Flex>
        </Box>
      </Flex>
      {children}
    </Box>
  );
};
