import axios from 'axios';
import { useMutation } from 'react-query';
import qs from 'query-string';
import { PresignedUrlResponse } from './UploadButton.model';

export type UploadImageOptions = {
  field: string;
  presignedUrl: string;
  headers?: Record<string, string>;
  getPresignedUrl?: (query?: Record<string, string>) => Promise<string>;
  onUploadProgress?: (percent: number) => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

export const useUploadImage = (options: UploadImageOptions) => {
  const { field, presignedUrl, headers, onSuccess, onError, onUploadProgress } =
    options;

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
          },
        })
      );

      Object.entries(data.fields).forEach(([k, v]) => {
        formData.append(k, v);
      });

      return axios.post(data.url, formData, {
        headers: headers,
        onUploadProgress: (ev) => {
          const progress = Math.round((ev.loaded * 100) / ev.total);
          onUploadProgress && onUploadProgress(progress);
        },
      });
    },
    {
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
      onError: (err) => {
        console.log('onError: ', err);
        onError && onError(err);
      },
    }
  );
};
