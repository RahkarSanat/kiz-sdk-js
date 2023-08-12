import { BaseModel } from '../base.model';
import { ToModel } from './subs';

export class RecipientModel extends BaseModel<RecipientModel> {
  name!: string;
  to!: ToModel[];
  active?: boolean;
  triggers!: string[];
}
