import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { AuthenticationDecrypt, AuthTokenReq, AuthTokenRes } from '../common';
import { RequestService } from './core';
import { AXIOS_CLIENT } from '../common/infrastructure';

// TODO: fix types
export class AuthService extends RequestService<any, any> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  public async token(
    auth: AuthTokenReq,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<AuthTokenRes> {
    return this.post({ url: `${this.path}/token`, data: auth }, config);
  }

  public async logout(config?: AxiosRequestConfig): AxiosPromise<boolean> {
    return this.get<boolean>(`${this.path}/logout`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async decrypt(config?: AxiosRequestConfig): AxiosPromise<AuthenticationDecrypt> {
    return this.get<AuthenticationDecrypt>(`${this.path}/decrypt`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
