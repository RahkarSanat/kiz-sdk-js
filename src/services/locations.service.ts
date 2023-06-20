import { CreateAxiosDefaults } from 'axios';
import { BaseService } from './core';
import { Location, ServiceOption } from '../common/interfaces';
import { LocationModel } from '../common';
export class LocationsService extends BaseService<LocationModel, Location> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
