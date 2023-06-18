import { Base } from '../base';

export interface Driver<Meta = Record<string, unknown>> extends Base<Meta> {
  user_id: string;
  alias?: string;
  license_number?: string;
  status: boolean;
  expirations_at?: Date;
}
