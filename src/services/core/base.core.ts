import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { CountFilter, Filter } from '../../common';
import { RequestService } from './request.core';
import { AXIOS_CLIENT } from '../../common/infrastructure';

export class BaseService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  protected async count<T>(filter?: CountFilter<T>, config?: AxiosRequestConfig): Promise<number> {
    const { data } = await this.get<number>(`${this.path}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async create<T>(entity: T, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.post<T>(this.path, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async find<T>(filter?: Filter<T>, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.get<T>(this.path, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async findById<T>(id: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.get<T>(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async updateById<T>(id: string, entity: T, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.patch<T>(`${this.path}/${id}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async deleteById<T>(id: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.delete<T>(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async restoreById<T>(id: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.put<T>(`${this.path}/${id}/restore`, null, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async updateBulk<T>(
    filter: CountFilter<T>,
    entity: T,
    config?: AxiosRequestConfig,
  ): Promise<number> {
    const { data } = await this.patch<number>(`${this.path}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }
}
