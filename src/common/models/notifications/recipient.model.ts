import { BaseModel } from '../base.model';

export class RecipientModel extends BaseModel<RecipientModel> {
  phone_numbers?: string[];
  subjects?: string[];
  user_ids?: string[];
  active?: boolean;
}
