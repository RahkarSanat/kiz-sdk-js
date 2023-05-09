import { Options } from './base-options.model';

export class SocketOptions extends Options {
  channels!: string[];
  links?: [];
  level?: string;
  indicator?: string;
}
