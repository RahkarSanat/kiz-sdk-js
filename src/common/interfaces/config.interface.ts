import { Base } from './base';

export interface Config extends Base {
  key: string;
  type: string;
  value: Record<string, unknown>;
}
