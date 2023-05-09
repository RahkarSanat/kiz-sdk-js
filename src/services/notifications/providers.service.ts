import { CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Provider } from '../../common';
export class ProvidersService extends BaseService<Provider> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
