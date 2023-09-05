import { SmsProviderFunctionalityEnum } from '../../../../enums';
import { Options } from './base-options.model';

export class SmsOptions extends Options {
  functionality?: SmsProviderFunctionalityEnum;
  provider_lookup_template_name?: string;
  retry?: boolean;
}
