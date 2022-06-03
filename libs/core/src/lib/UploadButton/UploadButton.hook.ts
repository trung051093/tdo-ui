import axios, { AxiosError, AxiosResponse } from 'axios';
import { MutationObserverOptions, useMutation } from 'react-query';

export type UploadImageOptions = {
  field: string;
  presignedUrl: string;
  headers?: Record<string, string>;
  onUploadProgress?: (p: any) => void;
} & MutationObserverOptions;

export const useUploadImage = (options: UploadImageOptions) => {
  const { field, headers, presignedUrl, onUploadProgress, ...restOptions } =
    options;

  return useMutation(
    (file: File) => {
      const payload = new FormData();
      payload.append(field, file);
      return axios.put(presignedUrl, payload, {
        headers: headers,
        onUploadProgress: (ev) => {
          const progress = Math.round((ev.loaded * 100) / ev.total);
          console.log("🚀 ~ file: UploadButton.hook.ts ~ line 23 ~ useUploadImage ~ progress", progress)
          onUploadProgress && onUploadProgress(progress);
        },
      });
    },
    {
      onSuccess: (data) => console.log('onSuccess: ', data),
      onError: (err) => console.log('onError: ', err),
    }
  );
};
