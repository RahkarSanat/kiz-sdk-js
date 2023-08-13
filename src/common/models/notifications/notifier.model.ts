import { BaseModel } from '../base.model';

export class NotifierModel extends BaseModel<NotifierModel> {
  reason!: string;
  triggers!: string;
  value_args?: string[];
}
