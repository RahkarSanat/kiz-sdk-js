import { Base } from '../base';

export interface To {
  alias: string;
  phone_number?: string;
  subject?: string;
  user_id?: string;
  active_items?: string[];
}

export interface Recipient<Meta = Record<string, unknown>> extends Base<Meta> {
  name: string;
  to: To[];
  active?: boolean;
  triggers: string[];
}

export type NotificationRecipientInterface = Recipient;
export type NotificationToInterface = To;
