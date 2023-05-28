import { Base } from './base';

export interface Driver extends Base {
  alias?: string;
  license_number?: string;
  violations?: Violation[];
  expirations_at?: Date;
}

export interface Violation {
  uid?: string;
  description?: string;
  license_number?: string;
  fine_amount?: number;
  occurrence_date?: Date;
  occurrence_place?: string;
}
