import { Resource } from 'common/enums';
import { Base } from '../base';

export interface Notifier extends Base {
  resource: Resource;
  reason: string;
  value_args: string[];
  ttl?: number;
  seen?: Record<string, boolean>;
  status: Record<string, unknown>;
  metadata: Record<string, unknown>;
}
