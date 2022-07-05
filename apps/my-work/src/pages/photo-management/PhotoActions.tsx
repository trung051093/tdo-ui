import { HStack } from '@chakra-ui/react';
import { UploadButton } from '@tdo-ui/core';
import { ApiPaths, ProxyUploadUri } from '@my-work/constants';
import { FileUpload } from '@tdo-ui/core/lib/Upload/UploadButton.model';
import { PhotoManagementContext } from './PhotoManagementContext';
import React from 'react';

export const PhotoActions = () => {
  const ctx = React.useContext(PhotoManagementContext);

  const onUploadStart = (file: FileUpload) => {
    ctx.addPhotoUpload(file.key, file);
  };

  const onUploadProgress = (file: FileUpload) => {
    ctx.updatePhotoUpload(file.key, file);
  };

  const onUploadSuccess = (file: FileUpload) => {
    ctx.updatePhotoUpload(file.key, file);
  };

  const onUploadError = (file: FileUpload) => {
    ctx.updatePhotoUpload(file.key, file);
  };

  return (
    <HStack>
      <UploadButton
        id="upload-photo"
        label={'Upload'}
        multiple
        proxyUrl={ProxyUploadUri}
        presignedUrl={ApiPaths.file.presignedUrl}
        onUploadStart={onUploadStart}
        onUploadProgress={onUploadProgress}
        onSuccess={onUploadSuccess}
        onError={onUploadError}
      />
    </HStack>
  );
};
