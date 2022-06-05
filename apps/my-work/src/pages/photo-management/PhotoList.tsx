import React from 'react';
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import { PhotoManagementContext } from './PhotoManagementContext';
import { PhotoCard } from './PhotoCard';
import { isEmpty } from 'lodash';
import { FileUpload } from '@tdo-ui/core/lib/Upload/UploadButton.model';

export const PhotoList = () => {
  const ctx = React.useContext(PhotoManagementContext);

  if (isEmpty(ctx.photoUpload)) {
    return null;
  }

  return (
    <Stack spacing="4" direction="row">
      {Object.keys(ctx.photoUpload).map((key) => (
        <PhotoCard
          key={key}
          file={(ctx.photoUpload as any)[key] as FileUpload}
        />
      ))}
    </Stack>
  );
};
