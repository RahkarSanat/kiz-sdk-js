import { CreateAxiosDefaults } from 'axios';
import { Driver, DriverModel, ServiceOption } from '../common';
import { BaseService } from './core';

export class DriversService extends BaseService<DriverModel, Driver> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
