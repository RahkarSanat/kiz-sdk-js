import { ServiceOption } from 'common/infrastructure';
import { Config, ConfigModel } from '../common';
import { BaseService } from './core';

export class ConfigsService extends BaseService<ConfigModel, Config> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
