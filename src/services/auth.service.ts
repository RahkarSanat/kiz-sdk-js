import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { AccessTokenObject, AuthTokenReq, AuthTokenRes, Grant, Items } from '../common';
import { RequestService } from './core';
import { AXIOS_CLIENT, ServiceOption } from '../common/infrastructure';

// TODO: fix types
export class AuthService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(AXIOS_CLIENT(options));
  }

  public async token(
    auth: AuthTokenReq,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<AuthTokenRes> {
    return this.post({ url: `${this.path}/token`, data: auth }, config);
  }

  public async logout(config?: AxiosRequestConfig): AxiosPromise<boolean> {
    return this.get(`${this.path}/logout`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async decrypt(config?: AxiosRequestConfig): AxiosPromise<AccessTokenObject> {
    return this.get<AccessTokenObject>(`${this.path}/decrypt`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async grants(
    resources: string[],
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Items<Grant>> {
    return this.get(`${this.path}/grants`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      params: {
        resources,
      },
      ...config,
    });
  }
}
