import { NotificationMethod } from '../../enums';
import { Base } from '../base';

export interface Rule<Meta = Record<string, unknown>> extends Base<Meta> {
  method?: NotificationMethod;
  source_subject?: string;
  source_id?: string;
  destination_subject: string;
  blacklist?: BlackList;
}

export interface BlackList {
  source?: string[];
  destination?: string[];
}
