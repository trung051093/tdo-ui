import { injectable } from 'inversify';
import { BaseService } from '@tdo-ui/core/services';
import { ApiPaths } from '@my-work/constants';
import {
  PresignedUrlRequest,
  PresignedUrlResponse,
} from '@my-work/models/file.model';
import qs from 'query-string';

export interface IFileServices {
  getPresignedUrl: (
    query?: PresignedUrlRequest
  ) => Promise<PresignedUrlResponse>;
}

@injectable()
export class FileServices extends BaseService implements IFileServices {
  getPresignedUrl(query?: PresignedUrlRequest): Promise<PresignedUrlResponse> {
    return super.get<PresignedUrlRequest, PresignedUrlResponse>(
      qs.stringifyUrl({
        url: ApiPaths.file.presignedUrl,
        query: query,
      })
    );
  }
}
