import { CreateAxiosDefaults } from 'axios';
import {
  AuthService,
  LocationsService,
  UsersService,
  GrantsService,
  ArtifactsService,
  NotifierService,
  TemplatesService,
  ProvidersService,
} from './services';

export * from './services';
export * from './common';

export class KizClient {
  protected auth?: AuthService;
  protected locations?: LocationsService;
  protected users?: UsersService;
  protected grants?: GrantsService;
  protected artifacts?: ArtifactsService;
  protected notifier?: NotifierService;
  protected templates?: TemplatesService;
  protected providers?: ProvidersService;
  // protected profiles?: ProfilesService;
  // protected drivers?: DriversService;
  // protected vehicles?: VehiclesService;

  constructor(protected readonly options?: CreateAxiosDefaults) {}

  public get authService() {
    return (this.auth = this.auth ?? new AuthService('/auth', this.options));
  }

  public get locationService() {
    return (this.locations = this.locations ?? new LocationsService('/locations', this.options));
  }

  public get userService() {
    return (this.users = this.users ?? new UsersService('/users', this.options));
  }

  public get grantsService() {
    return (this.grants = this.grants ?? new GrantsService('/grants', this.options));
  }

  public get artifactsService() {
    return (this.artifacts = this.artifacts ?? new ArtifactsService('/artifacts', this.options));
  }

  public get notifierService() {
    return (this.notifier = this.notifier ?? new NotifierService('/notifications/notifier', this.options));
  }

  public get providersService() {
    return (this.providers =
      this.providers ?? new ProvidersService('/notifications/providers', this.options));
  }

  public get templatesService() {
    return (this.templates =
      this.templates ?? new TemplatesService('/notifications/templates', this.options));
  }

  // public get profilesService() {
  //   return (this.profiles = this.profiles ?? new ProfilesService('/profiles', this.options));
  // }

  // public get driversService() {
  //   return (this.drivers = this.drivers ?? new DriversService('/drivers', this.options));
  // }

  // public get vehiclesService() {
  //   return (this.vehicles = this.vehicles ?? new VehiclesService('/vehicles', this.options));
  // }
}
