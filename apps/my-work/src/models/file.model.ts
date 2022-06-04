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
