import { Resource } from 'common/enums';
import { BaseModel } from '../base.model';

export class NotifierModel extends BaseModel<NotifierModel> {
  resource!: Resource;
  reason!: string;
  value_args?: string[];
  ttl?: number;
  seen?: Record<string, boolean>;
  status?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}
