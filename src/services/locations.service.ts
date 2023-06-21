import { BaseService } from './core';
import { Location } from '../common/interfaces';
import { LocationModel } from '../common';
import { ServiceOption } from 'common/infrastructure';
export class LocationsService extends BaseService<LocationModel, Location> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
