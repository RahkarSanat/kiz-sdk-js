import { SmsFunctionality } from '../../../../enums';
import { Options } from './base-options.model';

export class SmsOptions extends Options {
  functionality!: SmsFunctionality;
  provider_lookup_template_name?: string;
  retry?: boolean;
}
