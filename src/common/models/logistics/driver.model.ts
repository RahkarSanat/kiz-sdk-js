import { BaseModel } from '../base.model';

export class DriverModel extends BaseModel<DriverModel> {
  user_id?: string;
  alias?: string;
  license_number?: string;
  status?: boolean;
  expirations_at?: Date;
}
