// Implementation exactly like RFC 7946.

import { type GeoJSON as GeoEnum } from '../';

// GeoJSONPosition type: [longitude, latitude, elevation] | [longitude, latitude]
type GeoJSONPosition = [number, number, number] | [number, number];

// The below generic implementation chose the type by the value of T
type GeoJsonCoordinates<T> = T extends 1
  ? GeoJSONPosition
  : T extends 2
  ? GeoJSONPosition[]
  : T extends 3
  ? GeoJSONPosition[][]
  : T extends 4
  ? GeoJSONPosition[][][]
  : GeoJSONPosition[][][];

export interface GeometryInterface<GeometryType, T extends 1 | 2 | 3 | 4 | 5> {
  type: GeometryType;
  coordinates: GeoJsonCoordinates<T>;
}

export interface Point extends GeometryInterface<GeoEnum.Point, 1> {}
export interface LineString extends GeometryInterface<GeoEnum.LineString, 2> {}
export interface Polygon extends GeometryInterface<GeoEnum.Polygon, 3> {}
export interface MultiPoint extends GeometryInterface<GeoEnum.MultiPoint, 2> {}
export interface MultiLineString extends GeometryInterface<GeoEnum.MultiLineString, 3> {}
export interface MultiPolygon extends GeometryInterface<'MultiPolygon', 4> {}

// Try not to use 'GeometryCollection'
export interface GeometryCollection<Geometries> {
  type: 'GeometryCollection';
  geometries: Geometries[];
}

export type Geometry =
  | GeometryCollection<any>
  | LineString
  | MultiLineString
  | MultiPoint
  | MultiPolygon
  | Point
  | Polygon;
