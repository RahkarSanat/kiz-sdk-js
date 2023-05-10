import type { Geometry } from '../types';
import { Base } from './base';

export interface Location extends Base {
  type: string;
  identity?: string;
  geometry: Geometry;
  properties?: Record<string, unknown>;
}
