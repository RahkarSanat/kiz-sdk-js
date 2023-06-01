import { Config, ConfigModel, CountQueryMethodsInput, Items, QueryMethodsInput } from 'common';
import { RequestService } from './core';
import axios, { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

export class ConfigsService extends RequestService<ConfigModel, Config> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super({ client: axios.create(options) });
  }

  public async count({ filter, config }: CountQueryMethodsInput<Config>): AxiosPromise<number> {
    return this.get<number>(`${this.path}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create(model: ConfigModel, { config }: { config?: AxiosRequestConfig }): AxiosPromise<Config> {
    return this.post(
      { url: `${this.path}`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async find({ filter, config }: QueryMethodsInput<Config>): AxiosPromise<Items<Config>> {
    return this.get<Items<Config>>(`${this.path}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findById(id: string, { config }: { config?: AxiosRequestConfig }): AxiosPromise<Config> {
    return this.get(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById(
    id: string,
    model: ConfigModel,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Config> {
    return this.patch(`${this.path}/${id}`, model, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById(id: string, { config }: { config?: AxiosRequestConfig }): AxiosPromise<Config> {
    return this.delete(`${this.path}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreById(id: string, { config }: { config?: AxiosRequestConfig }): AxiosPromise<Config> {
    return this.put(
      { url: `${this.path}/${id}/restore` },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async updateBulk(
    model: ConfigModel,
    { filter, config }: CountQueryMethodsInput<Config>,
  ): AxiosPromise<number> {
    return this.patch<number>(`${this.path}/bulk`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
