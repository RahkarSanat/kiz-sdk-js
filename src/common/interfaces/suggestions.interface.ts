import { LoaderType, SuggestStatus } from '../enums';
import { Base } from './base';

export interface Suggestion extends Base {
  status: SuggestStatus;
  order_id: string;
  driver_id?: string;
  vehicle_id?: string;
  suggested_price?: number;
  prepayment?: number;
  accepted_at?: Date;
  accepted_by?: Date;
  rejected_at?: Date;
  rejected_by?: Date;
  loader_type: LoaderType;
}
