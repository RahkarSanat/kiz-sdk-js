import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { AuthTokenReq, AuthTokenRes } from '../../common';
import { BaseService } from '../core';

export class AuthService extends BaseService {
  constructor(protected readonly path: string, protected readonly options: CreateAxiosDefaults) {
    super(path, options);
  }

  public async token(auth: AuthTokenReq): Promise<AuthTokenRes> {
    const { data } = await this.post<AuthTokenRes>(`${this.path}/token`, auth);

    return data;
  }

  public async logout(config?: AxiosRequestConfig): Promise<AuthTokenRes> {
    const { data } = await this.post<AuthTokenRes>(`${this.path}/logout`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  public async decrypt(config?: AxiosRequestConfig): Promise<AuthTokenRes> {
    const { data } = await this.get<AuthTokenRes>(`${this.path}/decrypt`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }
}
