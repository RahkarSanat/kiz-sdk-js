import { CreateAxiosDefaults } from 'axios';
import { AuthService } from './services';

export * from './services';
export * from './common';

export class KizClient {
  protected auth?: AuthService;

  constructor(protected readonly options?: CreateAxiosDefaults) {}

  public get authService() {
    return (this.auth = this.auth ?? new AuthService('/auth', this.options));
  }
}
