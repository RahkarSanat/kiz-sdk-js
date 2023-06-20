import { CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Provider, ProviderModel, ServiceOption } from '../../common';
export class ProvidersService extends BaseService<ProviderModel, Provider> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
