import { Action } from 'common/enums';
import { BaseModel } from './base.model';

export class GrantModel extends BaseModel<GrantModel> {
  subject!: string;
  action!: Action;
  object!: string;
  field?: string[];
  filter?: string[];
  location?: string[];
  time?: GrantTimeModel[];
}

export class GrantTimeModel {
  cron_exp!: string;
  duration!: number;
}
