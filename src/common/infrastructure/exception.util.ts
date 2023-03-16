import { ExceptionScope } from './exception-scope.enum';

interface ExceptionDetails {
  scope: ExceptionScope;
  message: string;
  info?: Record<string, unknown>;
}

export class Exceptioner extends Error {
  readonly scope: ExceptionScope;
  readonly info?: Record<string, unknown>;

  constructor(details: ExceptionDetails) {
    super(details.message);
    this.scope = details.scope;
    this.info = details.info;
  }
}
