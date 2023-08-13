import { SmsFunctionality, SocketLevel } from '../../enums';
import { Base } from '../base';

export interface Options {
  provider_id: string;
  alternative_provider_ids?: string[];
  body?: string;
  key_args?: string[];
  render?: boolean;
  turtle?: number;
}

// TODO: update after considering types (must be an interface)
export type FcmOptions = Options;

export interface MailOptions extends Options {
  html?: string;
  elementId?: string; // put parent body in specific html element
}

export interface SmsOptions extends Options {
  functionality: SmsFunctionality;
  provider_lookup_template_name?: string;
  retry?: boolean;
}

export interface SocketOptions extends Options {
  channels: string[];
  links?: [];
  level?: SocketLevel;
  indicator?: string;
}

export interface Template<Meta = Record<string, unknown>> extends Base<Meta> {
  name: string;
  description?: string;
  reason: string;
  sms?: SmsOptions;
  mail?: MailOptions;
  fcm?: FcmOptions;
  socket?: SocketOptions;
}

export type NotificationTemplateInterface = Template;
export type NotificationTemplateSmsOptionsInterface = SmsOptions;
export type NotificationTemplateSocketOptionsInterface = SocketOptions;
export type NotificationTemplateMailOptionsInterface = MailOptions;
export type NotificationTemplateFcmOptionsInterface = FcmOptions;
