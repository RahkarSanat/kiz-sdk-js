import { NotificationMethod } from '../../enums';
import { BaseModel } from '../base.model';

export class BlackListModel {
  source?: string[];
  destination?: string[];
}

export class RuleModel extends BaseModel<RuleModel> {
  method!: NotificationMethod;
  source_subject?: string;
  destination_subject!: string;
  blacklist?: BlackListModel;
}
