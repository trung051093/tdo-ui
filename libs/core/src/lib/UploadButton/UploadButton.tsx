import React from 'react';
import noop from 'lodash/noop';
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
  field?: string;
  accept?: string;
  headers?: Record<string, string>;
  presignedUrl?: string;
  onUploadProgress?: (n: number) => void;
  onSelectFile?: (file: File) => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const UploadButton = ({
  id,
  field = DEFAULT_FIELD_NAME,
  headers = DEFAULT_HEADER,
  accept = DEFAULT_ACCEPT,
  presignedUrl = '',
  onUploadProgress = noop,
  onSuccess = noop,
  onError = noop,
}: UploadButtonProps) => {
  const uploader = useUploadImage({
    field,
    headers,
    presignedUrl,
    onUploadProgress,
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
