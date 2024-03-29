import type { Geometry } from '../../types';
import { Base } from '../base';

export interface Location<Meta = Record<string, unknown>, Prop = Record<string, unknown>> extends Base<Meta> {
  type: string;
  identity?: string;
  geometry: Geometry;
  properties?: Prop;
}
