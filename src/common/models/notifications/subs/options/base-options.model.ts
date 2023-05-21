import { NestedBaseModel } from 'common/models/nested-base.model';

export class Options extends NestedBaseModel {
  provider_id!: string;
  recipient_id!: string;
  body?: string;
  key_args?: string[];
  render?: boolean;
}
