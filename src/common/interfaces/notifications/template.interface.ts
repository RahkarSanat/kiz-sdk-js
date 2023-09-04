import { SmsProviderFunctionalityEnum, SocketPriorityLevel } from '../../enums';
import { Base } from '../base';

export interface Options {
  provider_id: string;
  alternative_provider_ids?: string[];
  body?: string;
  key_args?: string[];
  render?: boolean;
  retry_with_alternative_provider_after?: number;
  turtle?: number;
}

// TODO: update after considering types (must be an interface)
export type FcmOptions = Options;

export interface MailOptions extends Options {
  html?: string;
  elementId?: string; // put parent body in specific html element
}

/* 
  set value for `provider_lookup_template_name` only if the `functionality` is `lookup`
*/
export interface SmsOptions extends Options {
  functionality?: SmsProviderFunctionalityEnum;
  provider_lookup_template_name?: string;
  retry?: boolean;
}

/* 
  default value for `priority_level` is `info`
  default value for `require_acknowledgment` is `true`
*/
export interface SocketOptions extends Options {
  base_topic: string;
  links?: [];
  priority_level?: SocketPriorityLevel;
  require_acknowledgment?: boolean;
}

export interface Template<Meta = Record<string, unknown>> extends Base<Meta> {
  name: string;
  active?: boolean;
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
