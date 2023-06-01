import { CreateAxiosDefaults } from 'axios';
import { BaseService } from './core';
import { Location } from '../common/interfaces';
import { LocationModel } from 'common/models/location.model';
export class LocationsService extends BaseService<LocationModel, Location> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
