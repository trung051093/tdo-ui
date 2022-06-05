import React from 'react';
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

import { FiHome, FiCamera } from 'react-icons/fi';
import { SidebarContent, LinkItem } from '@tdo-ui/core/lib/Sidebar';
import { PageContent } from '@tdo-ui/core/lib/Page';
import { MainHeader } from './MainHeader';
import { Logo } from '@my-work/components/Logo/Logo';
import { ROUTES } from '@my-work/constants/routes';

const LinkItems: LinkItem[] = [
  { name: 'Users', icon: FiHome, href: ROUTES.Home },
  { name: 'Photos', icon: FiCamera, href: ROUTES.Photos },
];

export interface MainLayoutProps {
  title?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
}

export const MainLayout = ({
  title = '',
  leftAction,
  rightAction,
  children,
}: MainLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <SidebarContent
        logo={<Logo />}
        items={LinkItems}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent logo={<Logo />} items={LinkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MainHeader title={title} onOpenSizebar={onOpen} />
      <PageContent leftAction={leftAction} rightAction={rightAction}>
        {children}
      </PageContent>
    </Box>
  );
};

export default MainLayout;
