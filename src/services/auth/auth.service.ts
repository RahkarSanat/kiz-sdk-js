import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { AuthDecrypt, AuthTokenReq, AuthTokenRes } from '../../common';
import { RequestService } from '../core';
import { AXIOS_CLIENT } from '../../common/infrastructure';
export class AuthService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  public async token(auth: AuthTokenReq): AxiosPromise<AuthTokenRes> {
    return this.post<AuthTokenRes>(`${this.path}/token`, auth, {});
  }

  public async logout(config?: AxiosRequestConfig): AxiosPromise<boolean> {
    return this.get<boolean>(`${this.path}/logout`, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async decrypt(config?: AxiosRequestConfig): AxiosPromise<AuthDecrypt> {
    return this.get<AuthDecrypt>(`${this.path}/decrypt`, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }
}
