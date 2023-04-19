// Implementation exactly like RFC 7946.

import { type GeoJSON as GeoEnum } from '../enums';

// GeoJSONPosition type: [longitude, latitude, elevation] | [longitude, latitude]
export type GeoJSONPosition = [number, number, number] | [number, number];

// The below generic implementation chose the type by the value of T
export type GeoJsonCoordinates<T> = T extends 1
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

export type Point = GeometryInterface<GeoEnum.Point, 1>;
export type LineString = GeometryInterface<GeoEnum.LineString, 2>;
export type Polygon = GeometryInterface<GeoEnum.Polygon, 3>;
export type MultiPoint = GeometryInterface<GeoEnum.MultiPoint, 2>;
export type MultiLineString = GeometryInterface<GeoEnum.MultiLineString, 3>;
export type MultiPolygon = GeometryInterface<'MultiPolygon', 4>;

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
