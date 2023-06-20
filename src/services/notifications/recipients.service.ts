import { CreateAxiosDefaults } from 'axios';
import { Recipient, RecipientModel, ServiceOption } from '../../common';
import { BaseService } from '../core';
export class RecipientsService extends BaseService<RecipientModel, Recipient> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
