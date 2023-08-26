import { WorkflowToken } from '../interfaces';
import { BaseModel } from './base.model';

export class WorkflowModel<T = unknown> extends BaseModel<WorkflowModel<T>> {
  type?: string;
  data?: T;
  status!: string;
  tokens!: WorkflowToken[];
}
