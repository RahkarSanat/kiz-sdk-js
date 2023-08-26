import { ServiceOption } from '../common/infrastructure';
import { Grant, GrantModel } from '../common';
import { BaseService } from './core';

export class GrantsService extends BaseService<GrantModel, Grant> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
