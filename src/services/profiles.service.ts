import { ServiceOption } from '../common/infrastructure';
import { Profile, ProfileModel } from '../common';
import { BaseService } from './core';

export class ProfilesService extends BaseService<ProfileModel, Profile> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
