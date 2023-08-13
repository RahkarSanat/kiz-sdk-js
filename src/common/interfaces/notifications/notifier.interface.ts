import { Base } from '../base';

export interface KavenegarEntry {
  messageid: number;

  message: string;

  status: number;

  statustext: string;

  sender: string;

  receptor: string;

  date: number;

  cost: number;
}

export interface NotifierStatistics {
  sms?: {
    status: Record<string, unknown>; // or any other supported provider response type
    message: string;
  };
  mail?: {
    status: Record<string, unknown>;
    message: string;
  };
  fcm?: {
    status: Record<string, unknown>;
    message: string;
  };
  socket?: {
    status: Record<string, unknown>;
    message: string;
  };
}

export interface Notifier<Meta = Record<string, unknown>> extends Base<Meta> {
  reason: string;
  triggers: string;
  value_args?: string[];
  statistic?: NotifierStatistics;
}

export type NotificationNotifierInterface = Notifier;
export type NotificationNotifierStatisticsInterface = NotifierStatistics;
