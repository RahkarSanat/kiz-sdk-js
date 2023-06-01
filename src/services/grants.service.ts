import { CreateAxiosDefaults } from 'axios';
import { Grant, GrantModel } from '../common';
import { BaseService } from './core';

export class GrantsService extends BaseService<GrantModel, Grant> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
