import { Config, ConfigModel, ServiceOption } from '../common';
import { BaseService } from './core';
import { CreateAxiosDefaults } from 'axios';

export class ConfigsService extends BaseService<ConfigModel, Config> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
