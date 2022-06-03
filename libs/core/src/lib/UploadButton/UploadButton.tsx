import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { Image } from './UploadButton.model';
import { FiCamera, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { useUploadImage } from './UploadButton.hook';
import {
  DEFAULT_HEADER,
  DEFAULT_ACCEPT,
  DEFAULT_FIELD_NAME,
} from './constants';

interface UploadButtonProps {
  id?: string;
  field: string;
  presignedUrl: string;
  accept?: string;
  headers?: Record<string, string>;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
}

export const UploadButton = ({
  id,
  field = DEFAULT_FIELD_NAME,
  presignedUrl,
  headers = DEFAULT_HEADER,
  accept = DEFAULT_ACCEPT,
  onSuccess,
  onError,
}: UploadButtonProps) => {
  const uploader = useUploadImage({
    field,
    presignedUrl,
    headers,
    onSuccess,
    onError,
  });
  const inputRef = React.createRef<HTMLInputElement>();

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    uploader.mutate(file);
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
          onChange={handleFileInputChange}
        />
      </Box>
      <IconButton aria-label="upload-image" onClick={handleBtnUploadClick}>
        <Box>
          {uploader.isSuccess && <FiCheckCircle />}
          {uploader.isError && <FiAlertTriangle />}
          {(uploader.isLoading || uploader.isIdle) && <FiCamera />}
        </Box>
      </IconButton>
    </Box>
  );
};
