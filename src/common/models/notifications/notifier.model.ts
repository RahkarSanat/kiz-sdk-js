import { CustomSmsRecipients } from '../../interfaces';
import { BaseModel } from '../base.model';

export class NotifyByReasonModel extends BaseModel<NotifyByReasonModel> {
  reason!: string;
  triggers!: string;
  value_args?: string[];
}

export class NotifyByCustomModel extends BaseModel<NotifyByCustomModel> {
  reason!: string;
  recipients!: CustomSmsRecipients;
  value_args?: string[];
}
