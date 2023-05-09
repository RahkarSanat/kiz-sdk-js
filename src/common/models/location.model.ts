import { LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'common/types/geo.type';
import { BaseModel } from './base.model';

export class LocationModel extends BaseModel<LocationModel> {
  type!: string;
  identity!: string;
  geometry!: LineString | MultiLineString | MultiPoint | MultiPolygon | Point | Polygon;
  vehicleId?: number;
  properties?: Record<string, unknown>;
}
