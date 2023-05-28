import { Base } from './base';

export interface Vehicle extends Base {
  type?: string;
  plate?: string[];
  model?: string;
  year?: number;
  drivers?: string[];
}
