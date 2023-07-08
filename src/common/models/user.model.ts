import { BaseModel } from './base.model';

export class UserModel extends BaseModel<UserModel> {
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
  subjects?: string[];
}
