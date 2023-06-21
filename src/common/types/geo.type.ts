import type {
  BBox,
  Feature,
  FeatureCollection,
  GeoJsonObject,
  GeometryCollection,
  LineString,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
  Point,
  Polygon,
  Position,
} from 'geojson';

export type GeoJSONPosition = Position;
export type GeoJSONBBox = BBox;
export type GoeJSONObject = GeoJsonObject;
export type GeoJSONPoint = Point;
export type GeoJSONMultiPoint = MultiPoint;
export type GeoJSONLineString = LineString;
export type GeoJSONMultiLineString = MultiLineString;
export type GeoJSONPolygon = Polygon;
export type GeoJSONMultiPolygon = MultiPolygon;
export type GeoJSONGeometryCollection = GeometryCollection;
export type GeoJSONFeature = Feature;
export type GeoJSONFeatureCollection = FeatureCollection;

export type Geometry =
  | GeoJSONMultiPoint
  | GeoJSONLineString
  | GeoJSONMultiLineString
  | GeoJSONPolygon
  | GeoJSONMultiPolygon
  | GeoJSONGeometryCollection;

export type GeoJSON = Geometry | GeoJSONFeature | GeoJSONFeatureCollection;
