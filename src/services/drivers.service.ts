import { CreateAxiosDefaults } from 'axios';
import { Driver } from '../common';
import { BaseService } from './core';

export class DriversService extends BaseService<Driver> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
