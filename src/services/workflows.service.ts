import { ServiceOption } from '../common/infrastructure';
import { Workflow, WorkflowModel } from '../common';
import { BaseService } from './core';

export class WorkflowsService<T = unknown> extends BaseService<WorkflowModel<T>, Workflow<T>> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
