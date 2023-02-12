import { AuthTokenReq, AuthTokenRes } from 'common/interfaces/auth.interface';
import { BaseService } from '../core/base.core';
import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

export class AuthService extends BaseService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  public async token(auth: AuthTokenReq): Promise<AuthTokenRes> {
    const { data } = await this.post<AuthTokenRes>(`${this.path}/token`, auth);

    return data;
  }

  public async logout(config?: AxiosRequestConfig): Promise<AuthTokenRes> {
    const { data } = await this.post<AuthTokenRes>(`${this.path}/logout`, {
      headers: {
        Authorization: `Bearer ${this.options?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  public async decrypt(config?: AxiosRequestConfig): Promise<AuthTokenRes> {
    const { data } = await this.get<AuthTokenRes>(`${this.path}/decrypt`, {
      headers: {
        Authorization: `Bearer ${this.options?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }
}
