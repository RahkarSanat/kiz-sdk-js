import { Base } from './base';
import { WorkflowToken } from './workflows';

export interface Workflow extends Base {
  type: string;
  data?: unknown;
  status: string;
  tokens: WorkflowToken[];
}
