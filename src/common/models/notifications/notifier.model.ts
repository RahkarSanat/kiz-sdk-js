import { Resource } from 'common/enums';
import { BaseModel } from '../base.model';

export class NotifierModel extends BaseModel<NotifierModel> {
  resource!: Resource;
  reason!: string;
  value_args?: string[];
  ttl?: number;
  metadata?: Record<string, unknown>;
}
