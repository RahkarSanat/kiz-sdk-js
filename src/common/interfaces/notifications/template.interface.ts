import { SocketLevel } from '../../enums';
import { Base } from '../base.interface';

export interface Options {
  provider_id: string;
  body?: string;
  key_args?: string[];
  render?: boolean;
  replacementCharacter?: string;
}

// TODO: update after considering types (must be an interface)
export type FcmOptions = Options;

export interface MailOptions extends Options {
  html?: string;
  elementId?: string; // put parent body in specific html element
}

export interface SmsOptions extends Options {
  body?: string;
  lookup?: boolean;
}

export interface SocketOptions extends Options {
  channels: string[];
  links?: [];
  level?: SocketLevel;
  indicator?: string;
}

export interface Template extends Base {
  name: string;
  description?: string;
  sms?: SmsOptions;
  mail?: MailOptions;
  fcm?: FcmOptions;
  socket?: SocketOptions;
}
