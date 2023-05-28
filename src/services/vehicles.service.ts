import { CreateAxiosDefaults } from 'axios';
import { Vehicle } from '../common';
import { BaseService } from './core';

export class VehiclesService extends BaseService<Vehicle> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
