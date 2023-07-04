import { Action } from '../enums';
import { BaseModel } from './base.model';

export class UserModel extends BaseModel<UserModel> {
  phone?: string;
  email?: Action;
  username?: string;
  password?: string;
  subjects?: string[];
}
