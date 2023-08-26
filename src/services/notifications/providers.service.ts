import { BaseService } from '../core';
import { Provider, ProviderModel } from '../../common';
import { ServiceOption } from '../../common/infrastructure';
export class ProvidersService extends BaseService<ProviderModel, Provider> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
