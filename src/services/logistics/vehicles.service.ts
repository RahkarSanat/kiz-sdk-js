import { ServiceOption } from '../../common/infrastructure';
import { Vehicle, VehicleModel } from '../../common';
import { BaseService } from '../core';

export class VehiclesService extends BaseService<VehicleModel, Vehicle> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
