import { Geometry } from '../../types';
import { BaseModel } from '../base.model';

export class LocationModel extends BaseModel<LocationModel> {
  type!: string;
  identity!: string;
  geometry!: Geometry;
  properties?: Record<string, unknown>;
}
