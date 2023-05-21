import { CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Notifier } from 'common';
export class NotifierService extends BaseService<Notifier> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
