import { injectable } from 'inversify';
import { BaseService } from '@tdo-ui/core/services';
import { ApiPaths } from '@my-work/constants';
import { SrpRegisterRequest, SrpRegisterResponse } from '@my-work/models/srp_auth.model';

export interface ISrpAuthServices {
  register: (params: SrpRegisterRequest) => Promise<SrpRegisterResponse>;
}

@injectable()
export class SrpAuthServices extends BaseService implements ISrpAuthServices {
  register(params: SrpRegisterRequest): Promise<SrpRegisterResponse> {
    return super.post<SrpRegisterRequest, SrpRegisterResponse>(
      ApiPaths.auth.register,
      params
    );
  }
}
