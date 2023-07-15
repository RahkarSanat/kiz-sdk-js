import { BaseModel } from './base.model';

export class StatModel extends BaseModel<StatModel> {
  identity!: string;
  amount!: number;
  bias!: number;
  date!: Date;
  flags?: { [x: string]: number | string }
}
