import { Base } from '../base';
import { Violation } from './violation.interface';

export interface Vehicle<Meta = Record<string, unknown>> extends Base<Meta> {
  type?: string;
  plate?: string[];
  model?: string;
  violations?: Violation[];
  year?: number;
  drivers?: string[];
}
