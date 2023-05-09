import { Options } from './base-options.model';

export class SmsOptions extends Options {
  body?: string;
  retry?: boolean;
}
