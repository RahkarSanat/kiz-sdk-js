import { Base } from '../base.interface';

export interface FcmConfigs {
  firebase_type: string;
  firebase_project_id: string;
  firebase_private_id: string;
  firebase_client_email: string;
  firebase_client_id: string;
  firebase_client_provider: string;
  firebase_auth_url: string;
  firebase_auth_provider: string;
  firebase_token_url: string;
  firebase_private_key: string;
}

export interface MailConfigs {
  host: string;
  username: string;
  password: string;
  smtp: string;
  imap: string;
}

export interface SmsConfigs {
  api_url: string;
  api_key: string;
}

// TODO: update after considering types
export interface SocketConfigs {
  [key: string]: string;
}

export interface Provider extends Base {
  name: string;
  description?: string;
  active: boolean;
  sms?: SmsConfigs;
  mail?: MailConfigs;
  fcm?: FcmConfigs;
  socket?: SocketConfigs;
}
