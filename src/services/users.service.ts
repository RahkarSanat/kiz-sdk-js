import { ServiceOption } from 'common/infrastructure';
import { User, UserModel } from '../common';
import { BaseService } from './core';

export class UsersService extends BaseService<UserModel, User> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
