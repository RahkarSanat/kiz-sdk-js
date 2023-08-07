import { ServiceOption } from 'common/infrastructure';
import { Suggestion, SuggestionModel } from '../common';
import { BaseService } from './core';

export class SuggestionsService extends BaseService<SuggestionModel, Suggestion> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
