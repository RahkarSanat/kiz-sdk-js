import { Resource } from '../../enums';
import { Base } from '../base';

//TODO: must be refactor after finishing tests.
export interface Notifier<Meta = Record<string, unknown>> extends Base<Meta> {
  resource: Resource;
  receptor: string;
  template: string;
  value_args?: string[];
  seen?: Record<string, boolean>;
  status?: Record<string, boolean>;
}
