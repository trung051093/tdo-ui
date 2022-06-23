import axios from 'axios';
import { useMutation } from 'react-query';
import qs from 'query-string';
import {
  FileUpload,
  FileUploadStatus,
  PresignedUrlResponse,
} from './UploadButton.model';

export type UploadImageOptions = {
  field: string;
  presignedUrl: string;
  proxyUrl?: string;
  headers?: Record<string, string>;
  getPresignedUrl?: (query?: Record<string, string>) => Promise<string>;
  onUploadStart?: (file: FileUpload) => void;
  onUploadProgress?: (file: FileUpload) => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

export const useUploadImage = (options: UploadImageOptions) => {
  const {
    field,
    proxyUrl,
    presignedUrl,
    headers,
    onSuccess,
    onError,
    onUploadStart,
    onUploadProgress,
  } = options;

  return useMutation(
    async (file: File) => {
      const formData = new FormData();
      formData.append(field, file);

      const {
        data: { data },
      } = await axios.get<PresignedUrlResponse>(
        qs.stringifyUrl({
          url: presignedUrl,
          query: {
            fileType: file.type,
            fileName: file.name,
            proxy: proxyUrl,
          },
        })
      );

      Object.entries(data.fields).forEach(([k, v]) => {
        formData.append(k, v);
      });

      const fileUpload = Object.assign(file, {
        key: data.fields['key'],
        url: data.url,
        uploadProgress: 0,
        status: FileUploadStatus.Idle,
      }) as FileUpload;

      onUploadStart && onUploadStart(fileUpload);

      return axios.post(data.url, formData, {
        headers: headers,
        onUploadProgress: (ev) => {
          const progress = Math.round((ev.loaded * 100) / ev.total);
          onUploadProgress &&
            onUploadProgress({
              ...fileUpload,
              status: FileUploadStatus.Progressing,
              uploadProgress: progress,
            });
        },
      });
    },
    {
      onSuccess: (_, file) => {
        onSuccess &&
          onSuccess({
            ...file,
            type: file.type,
            size: file.size,
            name: file.name,
            status: FileUploadStatus.Success,
          });
      },
      onError: (err, file) => {
        onError &&
          onError({
            ...file,
            type: file.type,
            size: file.size,
            name: file.name,
            status: FileUploadStatus.Error,
            error: err,
          });
      },
    }
  );
};
