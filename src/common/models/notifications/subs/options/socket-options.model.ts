import { SocketLevel } from '../../../../enums';
import { Options } from './base-options.model';

export class SocketOptions extends Options {
  channels!: string[];
  links?: [];
  level?: SocketLevel;
  indicator?: string;
}
