import {
  Box,
  BoxProps,
  Image,
  Progress,
  Text,
  IconButton,
} from '@chakra-ui/react';
import {
  FileUpload,
  FileUploadStatus,
} from '@tdo-ui/core/lib/Upload/UploadButton.model';
import { FiX } from 'react-icons/fi';

interface PhotoCardProps {
  file?: FileUpload;
  placeholder?: string;
}

export const PhotoCard = ({ file, placeholder }: PhotoCardProps) => {
  const onDeleteFile = () => {
    alert('Delete file: ' + file?.name);
  };

  return (
    <Box
      pos="relative"
      width="200px"
      height="250px"
      borderRadius="4"
      boxShadow="xs"
    >
      <Box pos="absolute" right="-10px" top="-10px" zIndex="1">
        <IconButton
          size="xs"
          borderRadius="50%"
          aria-label="delete-photo"
          icon={<FiX />}
          onClick={onDeleteFile}
        />
      </Box>
      {file?.status === FileUploadStatus.Progressing && (
        <Box
          backgroundColor={'blackAlpha.400'}
          pos="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
        >
          <Progress size="xs" colorScheme="pink" value={file.uploadProgress} />
        </Box>
      )}
      {file?.status === FileUploadStatus.Success && (
        <Box overflow="hidden" borderRadius="4">
          <Image
            boxSize="200px"
            objectFit="cover"
            src={`${file?.url}${file?.key}`}
            fallbackSrc={placeholder}
          />
        </Box>
      )}
      <Box p="2">
        <Text noOfLines={1}>{file?.name}</Text>
      </Box>
    </Box>
  );
};
