import { Action } from 'common/enums';
import { BaseModel } from './base.model';
import { GrantTime } from 'common/interfaces';

export class GrantModel extends BaseModel<GrantModel> {
  subject!: string;
  action!: Action;
  object!: string;
  field?: string[];
  filter?: string[];
  location?: string[];
  time?: GrantTime[];
}
