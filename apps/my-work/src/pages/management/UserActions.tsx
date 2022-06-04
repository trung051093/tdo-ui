import { HStack, Button } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { UploadButton } from '@tdo-ui/core';
import { ApiPaths } from '@my-work/constants';

export const UserActions = () => {
  return (
    <HStack>
      <Button leftIcon={<FiPlus />}>Create</Button>
      <UploadButton
        id="upload-photo"
        presignedUrl={ApiPaths.file.presignedUrl}
        onUploadProgress={(percent: number) => console.log('upload progress:', percent)}
        onSuccess={(data) => console.log('upload success:', data)}
        onError={(err) => console.log('upload error:', err)}
      />
    </HStack>
  );
};
