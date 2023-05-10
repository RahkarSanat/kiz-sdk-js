import { Base } from './base';

export interface Artifact extends Base {
  identity: string;
  type: string;
  metadata: unknown;
}
