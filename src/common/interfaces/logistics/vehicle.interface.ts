import { Base } from '../base';
import { Violation } from './violation.interface';

export interface Vehicle extends Base {
  drivers?: string[];
  model?: string;
  plate?: string[];
  type?: string;
  violations?: Violation[];
  year?: number;
}
