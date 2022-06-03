import { BaseService } from '@tdo-ui/core/services';
import { ApiPaths } from '@my-work/constants';
import { injectable } from 'inversify';
import { PresignedUrlResponse } from '@my-work/models/file.model';

export interface IFileServices {
  getPresignedUrl: () => Promise<PresignedUrlResponse>;
}

@injectable()
export class FileServices extends BaseService implements IFileServices {
  getPresignedUrl(): Promise<PresignedUrlResponse> {
    return super.get<{}, PresignedUrlResponse>(ApiPaths.file.presignedUrl);
  }
}
