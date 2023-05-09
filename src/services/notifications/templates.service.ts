import { CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Template } from 'common';
export class TemplatesService extends BaseService<Template> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
