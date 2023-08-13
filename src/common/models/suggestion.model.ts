import { LoaderType, SuggestStatus } from '../enums';
import { BaseModel } from './base.model';

export class SuggestionModel extends BaseModel<SuggestionModel> {
  status!: SuggestStatus;
  order_id!: string;
  driver_id?: string;
  vehicle_id?: string;
  suggested_price?: number;
  prepayment?: number;
  accepted_at?: Date;
  accepted_by?: Date;
  rejected_at?: Date;
  rejected_by?: Date;
  loader_type!: LoaderType;
}
