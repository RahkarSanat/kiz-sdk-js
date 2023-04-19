import type { GeoJSON } from '../enums';
import type { GeoJsonCoordinates, GeoJSONPosition } from '../types';
import { Base } from './base.interface';

export interface Location extends Base {
  type: string;
  identity?: string;
  geometry: {
    type: GeoJSON;
    coordinates: GeoJsonCoordinates<GeoJSONPosition>;
  };
  properties?: Record<string, unknown>;
}
