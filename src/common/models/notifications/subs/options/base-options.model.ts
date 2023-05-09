import { NestedBaseModel } from 'common/models/nested-base.dto';

export class Options extends NestedBaseModel {
  provider_id!: string;
  body?: string;
  key_args?: string[];
  render?: boolean;
  replacementCharacter?: string;
}
