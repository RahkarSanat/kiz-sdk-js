import { WorkflowState } from './state.interface';

export interface WorkflowToken {
  id: string;
  parent?: string;
  locked?: boolean;
  history: WorkflowState[];
}
