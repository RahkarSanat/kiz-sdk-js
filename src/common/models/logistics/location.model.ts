import { Geometry } from 'common/types/geo.type';
import { BaseModel } from '../base.model';

export class LocationModel extends BaseModel<LocationModel> {
  type!: string;
  identity!: string;
  geometry!: Geometry;
  vehicleId?: number;
  properties?: Record<string, unknown>;
}
