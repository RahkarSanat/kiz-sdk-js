import type { GeoJSON } from '../enums';
import type { GeoJsonCoordinates, GeoJSONPosition } from '../types';
import { Base } from './base.interface';

export interface Geometry {
  type: GeoJSON;
  coordinates: GeoJsonCoordinates<GeoJSONPosition>;
}

export interface Location extends Base {
  type: string;
  identity?: string;
  geometry: Geometry;
  properties?: Record<string, unknown>;
}
