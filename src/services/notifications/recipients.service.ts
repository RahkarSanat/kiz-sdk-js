import { CreateAxiosDefaults } from 'axios';
import { Recipient, RecipientModel } from 'common';
import { BaseService } from '../core';
export class RecipientsService extends BaseService<RecipientModel, Recipient> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
