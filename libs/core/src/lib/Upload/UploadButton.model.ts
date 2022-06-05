export enum FileUploadStatus {
  Idle = 'idle',
  Progressing = 'progressing',
  Error = 'error',
  Success = 'success',
}

export type FileUpload = File & {
  key: string;
  url: string;
  uploadProgress?: number;
  status: FileUploadStatus;
  error?: Error;
};

export type PresignedUrlResponse = {
  data: {
    url: string;
    fields: Record<string, string>;
  };
};

export type PresignedUrlRequest = {
  fileName: string;
  fileType: string;
};
