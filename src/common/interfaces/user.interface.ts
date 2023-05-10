import { Base } from './base';

export interface User extends Base {
  phone?: string;
  email?: string;
  password?: string;
  username?: string;
  subject: string[];
}
