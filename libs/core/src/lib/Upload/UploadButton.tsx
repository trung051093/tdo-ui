import React from 'react';
import noop from 'lodash/noop';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { FiCamera, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { useUploadImage } from './UploadButton.hook';
import {
  DEFAULT_HEADER,
  DEFAULT_ACCEPT,
  DEFAULT_FIELD_NAME,
  DEFAULT_MULTIPLE,
} from './constants';
import { FileUpload } from './UploadButton.model';

interface UploadButtonProps {
  id?: string;
  label?: string;
  field?: string;
  accept?: string;
  headers?: Record<string, string>;
  proxyUrl?: string;
  presignedUrl?: string;
  multiple?: boolean;
  onUploadStart?: (file: FileUpload) => void;
  onUploadProgress?: (file: FileUpload) => void;
  onSelectFile?: (file: File) => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const UploadButton = ({
  id,
  label,
  multiple = DEFAULT_MULTIPLE,
  field = DEFAULT_FIELD_NAME,
  headers = DEFAULT_HEADER,
  accept = DEFAULT_ACCEPT,
  proxyUrl = '',
  presignedUrl = '',
  onUploadStart = noop,
  onUploadProgress = noop,
  onSuccess = noop,
  onError = noop,
}: UploadButtonProps) => {
  const uploader = useUploadImage({
    field,
    headers,
    presignedUrl,
    proxyUrl,
    onUploadStart,
    onUploadProgress,
    onSuccess,
    onError,
  });
  const inputRef = React.createRef<HTMLInputElement>();

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).forEach((file) => {
      uploader.mutate(file);
    });
  };

  const handleBtnUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box>
      <Box display="none">
        <input
          ref={inputRef}
          accept={accept}
          id={id}
          type="file"
          multiple={multiple}
          onChange={handleFileInputChange}
        />
      </Box>
      <Button aria-label="upload-image" onClick={handleBtnUploadClick}>
        <HStack spacing="2">
          <Box>
            {uploader.isSuccess && <FiCheckCircle />}
            {uploader.isError && <FiAlertTriangle />}
            {(uploader.isLoading || uploader.isIdle) && <FiCamera />}
          </Box>
          {label && <Text>{label}</Text>}
        </HStack>
      </Button>
    </Box>
  );
};
