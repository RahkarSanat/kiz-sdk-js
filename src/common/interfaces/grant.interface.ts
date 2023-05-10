import { Action } from 'common/enums/action.enum';
import { Base } from './base';

export interface Grant extends Base {
  subject: string;
  action: Action;
  object: string;
  field?: string[];
  filter?: string[];
  location?: string[];
  time?: GrantTime[];
}

export interface GrantTime {
  cron_exp: string;
  duration: number;
}
