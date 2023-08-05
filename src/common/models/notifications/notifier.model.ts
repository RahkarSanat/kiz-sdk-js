import { Resource } from '../../enums';
import { BaseModel } from '../base.model';

export class CustomRecipientModel {
  phone_numbers?: string[];
  subjects?: string[];
  user_ids?: string[];
}
export class NotifierModel extends BaseModel<NotifierModel> {
  resource!: Resource;
  reason!: string;
  template_id?: string;
  recipient?: CustomRecipientModel;
  value_args?: string[];
  ttl?: number;
  seen?: Record<string, boolean>;
  metadata?: Record<string, unknown>;
  status?: Record<string, unknown>;
}
