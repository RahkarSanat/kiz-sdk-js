import { CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Template, TemplateModel } from 'common';
export class TemplatesService extends BaseService<TemplateModel, Template> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
