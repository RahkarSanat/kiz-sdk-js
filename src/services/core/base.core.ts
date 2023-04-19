import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { CountFilter, Filter } from '../../common';
import { RequestService } from './request.core';
import { AXIOS_CLIENT } from '../../common/infrastructure';

export class BaseService<T> extends RequestService<T> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  protected async count<M = T>(filter?: CountFilter<M>, config?: AxiosRequestConfig): Promise<number> {
    const { data } = await this.get<number>(`${this.path}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async create<M = T, E = T>(entity: E, config?: AxiosRequestConfig): Promise<M> {
    const { data } = await this.post<M>(this.path, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async find<M = T>(filter?: Filter<M>, config?: AxiosRequestConfig): Promise<M> {
    const { data } = await this.get<M>(this.path, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async findById<M = T>(id: string, config?: AxiosRequestConfig): Promise<M> {
    const { data } = await this.get<M>(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async updateById<M = T>(id: string, entity: T, config?: AxiosRequestConfig): Promise<M> {
    const { data } = await this.patch<M>(`${this.path}/${id}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async deleteById<M = T>(id: string, config?: AxiosRequestConfig): Promise<M> {
    const { data } = await this.delete<M>(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async restoreById<M = T>(id: string, config?: AxiosRequestConfig): Promise<M> {
    const { data } = await this.put<M>(`${this.path}/${id}/restore`, null, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }

  protected async updateBulk<M = T>(
    filter: CountFilter<M>,
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
