import { WorkflowToken } from '../interfaces';
import { WorkflowStatus } from '../enums';
import { BaseModel } from './base.model';

export class WorkflowModel extends BaseModel<WorkflowModel> {
  type!: string;
  data?: any;
  status!: WorkflowStatus;
  tokens!: WorkflowToken[];
}
