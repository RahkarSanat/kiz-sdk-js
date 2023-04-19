import { CreateAxiosDefaults } from 'axios';
import { User } from '../common';
import { BaseService } from './core';

export class UsersService extends BaseService<User> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
