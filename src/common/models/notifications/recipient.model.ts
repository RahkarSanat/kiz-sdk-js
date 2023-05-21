import { BaseModel } from '../base.model';

export class RecipientModel extends BaseModel<RecipientModel> {
  phone_numbers?: string[];
  roles?: string[];
  user_ids?: string[];
  active?: boolean;
}
