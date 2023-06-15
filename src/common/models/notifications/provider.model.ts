import { ProviderName } from '../../enums';
import { BaseModel } from '../base.model';
import { FcmConfigs, MailConfigs, SmsConfigs, SocketConfigs } from './subs';

export class ProviderModel extends BaseModel<ProviderModel> {
  name!: ProviderName;
  description?: string;
  active?: boolean;
  sms?: SmsConfigs;
  mail?: MailConfigs;
  fcm?: FcmConfigs;
  socket?: SocketConfigs;
}
