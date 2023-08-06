import { ServiceOption } from 'common/infrastructure';
import { BaseService } from './core';
import { WorkflowModel } from 'common/models/workflow.model';
import { Workflow } from 'common/interfaces/workflow.interface';

export class WorkflowsService extends BaseService<WorkflowModel, Workflow> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
