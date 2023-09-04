import { SocketPriorityLevel } from '../../../../enums';
import { Options } from './base-options.model';

export class SocketOptions extends Options {
  base_topic!: string;
  links?: [];
  priority_level?: SocketPriorityLevel;
  require_acknowledgment?: boolean;
}
