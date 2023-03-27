import { CreateAxiosDefaults } from 'axios';
import { AuthService, LocationService } from './services';

export * from './services';
export * from './common';

export class KizClient {
  protected auth?: AuthService;
  protected location?: LocationService;

  constructor(protected readonly options?: CreateAxiosDefaults) {}

  public get authService() {
    return (this.auth = this.auth ?? new AuthService('/auth', this.options));
  }

  public get locationService() {
    return (this.location = this.location ?? new LocationService('/locations', this.options));
  }
}
