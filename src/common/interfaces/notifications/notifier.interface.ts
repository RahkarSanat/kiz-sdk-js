import { Resource } from '../../enums';
import { Base } from '../base';

export interface Notifier extends Base {
  resource: Resource;
  reason: string;
  template_id?: string;
  recipient?: RecipientNotifier;
  value_args: string[];
  ttl?: number;
  seen?: Record<string, boolean>;
  status?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

export interface RecipientNotifier {
  phone_numbers?: string[];
  roles?: string[];
  user_ids?: string[];
}
