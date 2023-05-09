import { Options } from './base-options.model';

export class MailOptions extends Options {
  html?: string;
  elementId?: string; // put parent body in specific html element
}
