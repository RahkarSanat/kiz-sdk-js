import { CreateAxiosDefaults } from 'axios';
import { Recipient } from 'common';
import { BaseService } from '../core';
export class RecipientsService extends BaseService<Recipient> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
