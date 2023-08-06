import { WorkflowStatus } from 'common/enums';
import { Base } from './base';
import { WorkflowToken } from './workflows';

export interface Workflow extends Base {
  type: string;
  data?: unknown;
  status: WorkflowStatus;
  tokens: WorkflowToken[];
}
