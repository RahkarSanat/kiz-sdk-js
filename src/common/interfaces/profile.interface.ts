import { Gender, UserType } from 'common/enums';
import { Base } from './base';

export interface Profile extends Base {
  type: UserType;
  fist_name?: string;
  last_name?: string;
  gender?: Gender;
  national_code?: string;
  nationality?: string;
  additional_name?: string;
  birth_date?: Date;
  birth_place?: Place;
  avatar?: string;
}

export interface Place {
  name?: string;
  country: string;
  locality?: string;
  region?: string;
}
