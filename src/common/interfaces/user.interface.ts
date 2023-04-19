import { Base } from './base.interface';

export interface User extends Base {
  phone?: string;
  email?: string;
  password?: string;
  username?: string;
  subject: string[];
}
