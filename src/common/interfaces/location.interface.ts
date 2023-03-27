import { LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'common/types/geo.type';

export interface Location {
  type: string;
  identity: string;
  geometry: LineString | MultiLineString | MultiPoint | MultiPolygon | Point | Polygon;
  vehicleId?: number;
  properties?: Record<string, unknown>;
}
