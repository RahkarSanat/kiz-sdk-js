import { Resource } from 'common/enums';
import { Base } from '../base';

export interface Notifier extends Base {
  resource: Resource;
  receptor: string;
  template: string;
  value_args?: string[];
  metadata: Record<string, unknown>;
  seen: boolean;
}
