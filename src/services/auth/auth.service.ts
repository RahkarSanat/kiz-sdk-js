import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { AuthDecrypt, AuthTokenReq, AuthTokenRes } from '../../common';
import { BaseService } from '../core';

export class AuthService extends BaseService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  public async token(auth: AuthTokenReq): Promise<AuthTokenRes> {
    const { data } = await this.post<AuthTokenRes>(`${this.path}/token`, auth);

    return data;
  }

  public async logout(config?: AxiosRequestConfig): Promise<boolean> {
    const { data } = await this.post<boolean>(`${this.path}/logout`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  public async decrypt(config?: AxiosRequestConfig): Promise<AuthDecrypt> {
    const { data } = await this.get<AuthDecrypt>(`${this.path}/decrypt`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }
}
