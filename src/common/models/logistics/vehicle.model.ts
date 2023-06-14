import { BaseModel } from '../base.model';
import { ViolationModel } from './violation.model';

export class VehicleModel extends BaseModel<VehicleModel> {
  type?: string;
  plate?: string[];
  model?: string;
  year?: number;
  drivers?: string[];
  violations?: ViolationModel[];
}
