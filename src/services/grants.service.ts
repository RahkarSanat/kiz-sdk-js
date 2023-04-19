import { CreateAxiosDefaults } from 'axios';
import { Grant } from '../common';
import { BaseService } from './core';

export class GrantsService extends BaseService<Grant> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
