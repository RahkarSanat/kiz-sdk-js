import { BaseService } from '../core';
import { Template, TemplateModel } from '../../common';
import { ServiceOption } from 'common/infrastructure';
export class TemplatesService extends BaseService<TemplateModel, Template> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
