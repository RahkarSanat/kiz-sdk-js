import { Base } from './base';
import { DataFlow, WorkflowToken } from './workflows';

export interface Workflow<T = DataFlow> extends Base {
  type: string;
  data?: T;
  status: string;
  tokens: WorkflowToken[];
}
