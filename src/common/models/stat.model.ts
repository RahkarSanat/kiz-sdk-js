import { StatMethod } from 'common/enums';
import { BaseModel } from './base.model';

export class StatModel<Meta = Record<string, unknown>> extends BaseModel<StatModel, Meta> {
  identity!: string;
  amount!: number;
  bias!: number;
  date!: Date;
  method!: StatMethod;
  flags?: { [x: string]: number | string };
}
