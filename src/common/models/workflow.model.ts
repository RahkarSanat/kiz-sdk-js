import { WorkflowToken } from '../interfaces';
import { BaseModel } from './base.model';

export class WorkflowModel extends BaseModel<WorkflowModel> {
  type!: string;
  data?: unknown;
  status!: string;
  tokens!: WorkflowToken[];
}
