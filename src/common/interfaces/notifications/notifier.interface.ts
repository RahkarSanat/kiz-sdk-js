import { Resource } from 'common/enums';
import { Base } from '../base';

export interface Notifier extends Base {
  resource: Resource;
  reason: string;
  value_args?: string[];
  ttl?: number;
  metadata?: Record<string, unknown>;
}
