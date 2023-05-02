import { Base } from './base.interface';

export interface Artifact extends Base {
  identity: string;
  type?: string;
  metadata?: unknown;
}
