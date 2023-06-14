import { Base } from '../base';
import { Driver } from './driver.interface';
import { Violation } from './violation.interface';

export interface Vehicle extends Base {
  type?: string;
  plate?: string[];
  model?: string;
  violations?: Violation[];
  year?: number;
  drivers?: Driver[];
}
