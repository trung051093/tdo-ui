import React from 'react';
import { Stack } from '@chakra-ui/react';
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
      {Object.keys(ctx.photoUpload).map((key) => {
        const file = (ctx.photoUpload as Record<string, FileUpload>)[key];
        return (
          <PhotoCard
            url={`${file.url}${file.key}`}
            id={key}
            key={key}
            status={file.status}
            fileName={file.name}
            fileType={file.type}
            uploadProgress={file.uploadProgress}
            error={file.error?.message}
          />
        );
      })}
    </Stack>
  );
};
