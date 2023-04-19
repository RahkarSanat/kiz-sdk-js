import { Base } from './base.interface';

export interface Artifact extends Base {
  key: string;
  type?: string;
  value?: unknown;
}
