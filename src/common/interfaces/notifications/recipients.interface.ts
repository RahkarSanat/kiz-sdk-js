import { Base } from '../base';

export interface Recipient extends Base {
  phone_numbers?: string[];
  roles?: string[];
  user_ids?: string[];
  active?: boolean;
}
