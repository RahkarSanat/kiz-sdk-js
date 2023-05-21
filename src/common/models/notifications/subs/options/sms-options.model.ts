import { SmsFunctionality } from 'common/enums';
import { Options } from './base-options.model';

export class SmsOptions extends Options {
  functionality!: SmsFunctionality;
  retry?: boolean;
}
