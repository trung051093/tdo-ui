import React from 'react';
import { Box } from '@chakra-ui/react';
import { PageContent } from '@tdo-ui/core/lib/Page';

export interface DefaultLayoutProps {
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
}

export const DefaultLayout = ({
  leftAction,
  rightAction,
  children,
}: DefaultLayoutProps) => {
  return (
    <Box>
      <PageContent leftAction={leftAction} rightAction={rightAction}>
        {children}
      </PageContent>
    </Box>
  );
};

export default DefaultLayout;
