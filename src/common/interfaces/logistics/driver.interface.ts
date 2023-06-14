import { Base } from '../base';

export interface Driver extends Base {
  user_id: string;
  alias?: string;
  license_number?: string;
  status: boolean;
  expirations_at?: Date;
}
