import { Base } from './base';
import { WorkflowToken } from './workflows';

export interface Workflow<T = unknown> extends Base {
  type: string;
  data?: T;
  status: string;
  tokens: WorkflowToken[];
}
