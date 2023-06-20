import { CreateAxiosDefaults } from 'axios';
import { Grant, GrantModel, ServiceOption } from '../common';
import { BaseService } from './core';

export class GrantsService extends BaseService<GrantModel, Grant> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
