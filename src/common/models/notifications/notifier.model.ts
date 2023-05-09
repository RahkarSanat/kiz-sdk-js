import { Resource } from 'common/enums';
import { BaseModel } from '../base.model';

export class NotifierModel extends BaseModel<NotifierModel> {
  resource!: Resource;
  receiver!: string;
  value_args?: string[];
  template!: string;
  seen?: boolean;
  ttl?: number;
  metadata?: Record<string, unknown>;
}
