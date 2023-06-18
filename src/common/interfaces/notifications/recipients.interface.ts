import { Base } from '../base';

export interface Recipient<Meta = Record<string, unknown>> extends Base<Meta> {
  phone_numbers?: string[];
  roles?: string[];
  user_ids?: string[];
  active?: boolean;
}
