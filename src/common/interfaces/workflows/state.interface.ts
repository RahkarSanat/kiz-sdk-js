import { WorkflowStatus } from 'common/enums';

export interface WorkflowState {
  ref: string;
  name?: string;
  status: WorkflowStatus;
  value?: unknown;
}
