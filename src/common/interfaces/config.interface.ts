import { Base } from './base';

export interface Config<Meta = Record<string, unknown>> extends Base<Meta> {
  key: string;
  type: string;
  value: Record<string, unknown>;
}
