import { BaseService } from '../core';
import { Rule, RuleModel } from '../../common';
import { ServiceOption } from 'common/infrastructure';
export class RulesService extends BaseService<RuleModel, Rule> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
