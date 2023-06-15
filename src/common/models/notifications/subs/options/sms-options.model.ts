import { SmsFunctionality } from '../../../../enums';
import { Options } from './base-options.model';

export class SmsOptions extends Options {
  functionality!: SmsFunctionality;
  retry?: boolean;
}
