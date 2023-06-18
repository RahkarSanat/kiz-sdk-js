import { Base } from './base';

export interface Artifact<Meta> extends Base<Meta> {
  identity: string;
  type: string;
  metadata: Meta;
}
