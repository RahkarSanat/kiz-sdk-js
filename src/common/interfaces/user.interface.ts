import { Base } from './base';

export interface User<Meta = Record<string, unknown>> extends Base<Meta> {
  phone?: string;
  email?: string;
  password?: string;
  username?: string;
  subjects: string[];
}
