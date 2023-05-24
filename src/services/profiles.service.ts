import { CreateAxiosDefaults } from 'axios';
import { Profile } from '../common';
import { BaseService } from './core';

export class ProfilesService extends BaseService<Profile> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
