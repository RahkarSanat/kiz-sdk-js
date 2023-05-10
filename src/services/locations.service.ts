import { CreateAxiosDefaults } from 'axios';
import { BaseService } from './core';
import { Location } from '../common/interfaces';
export class LocationsService extends BaseService<Location> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
