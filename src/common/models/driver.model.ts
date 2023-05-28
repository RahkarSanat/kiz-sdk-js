import { BaseModel } from './base.model';

export class DriverModel extends BaseModel<DriverModel> {
  alias?: string;
  license_number?: string;
  violations?: ViolationModel[];
  expirations_at?: Date;
}

export class ViolationModel {
  uid?: string;
  description?: string;
  license_number?: string;
  fine_amount?: number;
  occurrence_date?: Date;
  occurrence_place?: string;
}
