import { Box, Image, Progress, Text, IconButton } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';

interface PhotoCardProps {
  id?: string;
  url?: string;
  fileName?: string;
  fileType?: string;
  uploadProgress?: number;
  status?: 'idle' | 'success' | 'progressing' | 'error';
  error?: string;
  placeholder?: string;
}

export const PhotoCard = ({
  id,
  url,
  fileName,
  fileType,
  uploadProgress,
  status = 'idle',
  error,
  placeholder,
}: PhotoCardProps) => {
  const onDeleteFile = () => {
    alert('Delete file: ' + fileName);
  };

  return (
    <Box
      pos="relative"
      width="200px"
      height="260px"
      borderRadius="4"
      boxShadow="xs"
      borderColor={error ? 'red.700' : undefined}
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
      {status === 'progressing' && (
        <Box
          backgroundColor={'blackAlpha.400'}
          pos="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
        >
          <Progress size="xs" colorScheme="pink" value={uploadProgress} />
        </Box>
      )}
      {status === 'success' && (
        <Box overflow="hidden" borderRadius="4">
          <Image
            boxSize="200px"
            objectFit="cover"
            src={url}
            fallbackSrc={placeholder}
          />
        </Box>
      )}
      <Box p="2">
        <Text noOfLines={1}>{fileName}</Text>
        <Text noOfLines={1}>{fileType}</Text>
      </Box>
    </Box>
  );
};
