import { ServiceOption } from '../common/infrastructure';
import {  Workflow, WorkflowModel } from '../common';
import { BaseService } from './core';

export class WorkflowsService extends BaseService<WorkflowModel, Workflow> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
