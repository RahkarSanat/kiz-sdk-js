import { BaseModel } from '../base.model';
import { FcmConfigs, MailConfigs, SmsConfigs, SocketConfigs } from './subs';

export class ProviderModel extends BaseModel<ProviderModel> {
  name!: string;
  description?: string;
  active?: boolean;
  sms?: SmsConfigs;
  mail?: MailConfigs;
  fcm?: FcmConfigs;
  socket?: SocketConfigs;
}
