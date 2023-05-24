import { Gender, UserType } from 'common/enums';
import { BaseModel } from './base.model';

export class ProfileModel extends BaseModel<ProfileModel> {
  type!: UserType;
  fist_name?: string;
  last_name?: string;
  gender?: Gender;
  national_code?: string;
  nationality?: string;
  additional_name?: string;
  birth_date?: Date;
  birth_place?: PlaceModel;
  avatar?: string;
}

export class PlaceModel {
  name?: string;
  country!: string;
  locality?: string;
  region?: string;
}
