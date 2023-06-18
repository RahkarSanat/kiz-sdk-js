import { Base } from '../base';
import { Violation } from './violation.interface';

export interface Vehicle<Meta = Record<string, unknown>> extends Base<Meta> {
  drivers?: string[];
  model?: string;
  plate?: string[];
  type?: string;
  violations?: Violation[];
  year?: number;
}
