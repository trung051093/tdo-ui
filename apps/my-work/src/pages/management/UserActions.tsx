import { HStack, Button } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { UploadButton } from '@tdo-ui/core';
import { usePresignedUrl } from '@my-work/hooks';

export const UserActions = () => {
  const { data } = usePresignedUrl();
  return (
    <HStack>
      <Button leftIcon={<FiPlus />}>Create</Button>
      <UploadButton
        field="file"
        presignedUrl={data?.data as string}
        id="upload-photo"
        onSuccess={(data) => console.log('upload success:', data)}
        onError={(err) => console.log('upload error:', err)}
      />
    </HStack>
  );
};
