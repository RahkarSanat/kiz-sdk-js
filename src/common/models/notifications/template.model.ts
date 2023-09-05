import { BaseModel } from '../base.model';
import { FcmOptions, MailOptions, SmsOptions, SocketOptions } from './subs';

export class TemplateModel extends BaseModel<TemplateModel> {
  name!: string;
  active?: boolean;
  description?: string;
  reason!: string;
  sms?: SmsOptions;
  mail?: MailOptions;
  fcm?: FcmOptions;
  socket?: SocketOptions;
}
