import { AxiosPromise, AxiosRequestConfig } from 'axios';
import {
  Count,
  CountQueryMethodsInput,
  Items,
  OneFilter,
  OneQueryMethodsInput,
  QueryMethodsInput,
} from '../../common';
import { RequestService } from './request.core';
import { AXIOS_CLIENT, ServiceOption } from '../../common/infrastructure';

/**
 *
 * M => Model, that we use since we do nt have DTO. use to handle request
 * I => Interface, use to handle response
 *
 */
export class BaseService<M, I> extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(AXIOS_CLIENT(options));
  }

  public async count({ filter, config }: CountQueryMethodsInput<M> = {}): AxiosPromise<Count> {
    return this.get(`${this.path}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create(model: M, { config }: { config?: AxiosRequestConfig } = {}): AxiosPromise<I> {
    return this.post(
      { url: this.path, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async find({ filter, config }: QueryMethodsInput<M> = {}): AxiosPromise<Items<I>> {
    return this.get(this.path, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findById(id: string, { filter, config }: OneQueryMethodsInput<M> = {}): AxiosPromise<I> {
    return this.get(`${this.path}/${id}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findOne(
    filter: OneFilter<M>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<I> {
    return this.get(`${this.path}/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById(
    id: string,
    model: M,
    { filter, config }: OneQueryMethodsInput<M> = {},
  ): AxiosPromise<I> {
    return this.patch(`${this.path}/${id}`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateOne(
    model: M,
    filter: OneFilter<M>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<I> {
    return this.patch(`${this.path}/one`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById(id: string, { filter, config }: OneQueryMethodsInput<M> = {}): AxiosPromise<I> {
    return this.delete(`${this.path}/${id}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteOne(
    filter: OneFilter<M>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<I> {
    return this.delete(`${this.path}/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreById(id: string, { filter, config }: OneQueryMethodsInput<M> = {}): AxiosPromise<I> {
    return this.put(
      { url: `${this.path}/${id}/restore` },
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async restoreOne(
    filter: OneFilter<M>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<I> {
    return this.put<I, never>(
      { url: `${this.path}/restore/one` },
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async updateBulk(
    model: M,
    { filter, config }: CountQueryMethodsInput<M> = {},
  ): AxiosPromise<number> {
    return this.patch(`${this.path}/bulk`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
