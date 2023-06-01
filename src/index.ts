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
  ConfigsService,
  RecipientsService,
  DriversService,
  VehiclesService,
  ProfilesService,
} from './services';

export * from './services';
export * from './common';

export class KizClient {
  protected auth?: AuthService;
  protected locations?: LocationsService;
  protected users?: UsersService;
  protected profile?: ProfilesService;
  protected grants?: GrantsService;
  protected artifacts?: ArtifactsService;
  protected notifier?: NotifierService;
  protected providers?: ProvidersService;
  protected recipients?: RecipientsService;
  protected templates?: TemplatesService;
  protected configs?: ConfigsService;
  protected drivers?: DriversService;
  protected vehicles?: VehiclesService;

  constructor(protected readonly options?: CreateAxiosDefaults) {}

  public get locationService() {
    return (this.locations = this.locations ?? new LocationsService('/locations', this.options));
  }

  public get userService() {
    return (this.users = this.users ?? new UsersService('/users', this.options));
  }

  public get profilesService() {
    return (this.profile = this.profile ?? new ProfilesService('/profiles', this.options));
  }
  public get grantsService() {
    return (this.grants = this.grants ?? new GrantsService('/grants', this.options));
  }

  public get artifactsService() {
    return (this.artifacts = this.artifacts ?? new ArtifactsService('/artifacts', this.options));
  }

  public get configsService() {
    return (this.configs = this.configs ?? new ConfigsService('/configs', this.options));
  }

  public get authService() {
    return (this.auth = this.auth ?? new AuthService('/auth', this.options));
  }

  public get transports() {
    const driversService = (this.drivers =
      this.drivers ?? new DriversService('/transports/drivers', this.options));
    const vehiclesService = (this.vehicles =
      this.vehicles ?? new VehiclesService('/transports/vehicles', this.options));

    return { driversService, vehiclesService };
  }

  public get notifications() {
    const notifierService = (this.notifier =
      this.notifier ?? new NotifierService('/notifications/notifier', this.options));
    const providersService = (this.providers =
      this.providers ?? new ProvidersService('/notifications/providers', this.options));
    const recipientsService = (this.recipients =
      this.recipients ?? new RecipientsService('/notifications/recipients', this.options));
    const templatesService = (this.templates =
      this.templates ?? new TemplatesService('/notifications/templates', this.options));

    return { notifierService, providersService, recipientsService, templatesService };
  }
}
