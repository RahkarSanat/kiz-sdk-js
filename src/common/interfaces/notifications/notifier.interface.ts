import { Base } from '../base';

export interface SmsResponse {
  status?: boolean;
  third_party_message_id?: number;
  error?: string | undefined;
}

export interface SocketReport {
  sent: boolean;
  seen: boolean;
}

export interface SocketDelivery {
  sent_message: string;
  priority_level: string;
  links?: string[];
  reports?: Record<string, SocketReport>;
}
export interface SmsDelivery {
  reports: Record<string, SmsResponse & { user_id?: string }>;
  sent_message?: string;
}

export interface NotifierDelivery {
  sms?: SmsDelivery;
  socket?: SocketDelivery;

  mail?: {
    status: Record<string, unknown>[];
    sent_message?: string;
  };
  fcm?: {
    status: Record<string, unknown>[];
    sent_message?: string;
  };
}
export interface NotifyByReason extends Base {
  reason: string;
  triggers: string;
  value_args?: string[];
  metadata?: Record<string, unknown>;
  delivery?: NotifierDelivery;
}
export interface NotifyByCustom extends Base {
  reason: string;
  recipients: CustomSmsRecipients;
  value_args?: string[];
  metadata?: Record<string, unknown>;
  delivery?: NotifierDelivery;
}

export interface CustomSmsRecipients {
  alias: string;
  phone_numbers?: string[];
  subjects?: string[];
  user_ids?: string[];
}

export type NotificationNotifierInterface = NotifyByReason;
export type NotificationNotifierDeliveryInterface = NotifierDelivery;
