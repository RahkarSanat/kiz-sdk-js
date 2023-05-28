import { BaseModel } from './base.model';

export class VehicleModel extends BaseModel<VehicleModel> {
  type?: string;
  plate?: string[];
  model?: string;
  year?: number;
  drivers?: string[];
}
