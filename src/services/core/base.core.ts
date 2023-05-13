import { AxiosPromise, CreateAxiosDefaults } from 'axios';
import { ConfigMethodsInput, CountQueryMethodsInput, QueryMethodsInput } from '../../common';
import { RequestService } from './request.core';
import { AXIOS_CLIENT } from '../../common/infrastructure';

export class BaseService<T> extends RequestService<T> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  public async count<M = T>({ filter, config }: CountQueryMethodsInput<M>): AxiosPromise<number> {
    return this.get<number>(`${this.path}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create<M = T, E = T>(entity: E, { config }: ConfigMethodsInput): AxiosPromise<M> {
    return this.post<M>(this.path, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async find<M = { items: T[] }>({ filter, config }: QueryMethodsInput<T>): AxiosPromise<M> {
    return this.get<M>(this.path, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findById<M = T>(id: string, { config }: ConfigMethodsInput): AxiosPromise<M> {
    return this.get<M>(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById<M = T>(id: string, entity: M, { config }: ConfigMethodsInput): AxiosPromise<M> {
    return this.patch<M>(`${this.path}/${id}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById<M = T>(id: string, { config }: ConfigMethodsInput): AxiosPromise<M> {
    return this.delete<M>(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreById<M = T>(id: string, { config }: ConfigMethodsInput): AxiosPromise<M> {
    return this.put<M>(`${this.path}/${id}/restore`, null, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateBulk<M = T>(
    entity: M,
    { filter, config }: CountQueryMethodsInput<M>,
  ): AxiosPromise<number> {
    return this.patch<number>(`${this.path}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
