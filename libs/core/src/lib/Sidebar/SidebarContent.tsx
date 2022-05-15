import React from 'react';
import {
  Flex,
  Box,
  CloseButton,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavItem } from './NavItem';
import { IconType } from 'react-icons';

export type LinkItem = {
  name: string;
  icon: IconType;
  href: string;
};

export interface SidebarProps extends BoxProps {
  logo?: React.ReactNode;
  items?: LinkItem[];
  onClose?: () => void;
}

export const SidebarContent = ({
  logo = 'Logo',
  items = [],
  onClose,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {logo}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {items.map((link) => (
        <NavItem href={link.href} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
