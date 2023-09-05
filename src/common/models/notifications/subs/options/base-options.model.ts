import { NestedBaseModel } from '../../../nested-base.model';

export class Options extends NestedBaseModel {
  provider_id!: string;
  alternative_provider_ids?: string[];
  body?: string;
  key_args?: string[];
  render?: boolean;
  retry_with_alternative_provider_after?: number;
  turtle?: number;
}
