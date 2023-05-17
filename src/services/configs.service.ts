import { Config, ConfigMethodsInput, ConfigModel, CountQueryMethodsInput, QueryMethodsInput } from 'common';
import { RequestService } from './core';
import axios, { AxiosPromise, CreateAxiosDefaults } from 'axios';

export class ConfigsService extends RequestService<Config> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super({ client: axios.create(options) });
  }

  public async count({ filter, config }: CountQueryMethodsInput<Config>): AxiosPromise<number> {
    return this.get<number>(`${this.path}/count`, {
      config: {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async create(entity: ConfigModel, { config }: ConfigMethodsInput): AxiosPromise<Config> {
    return this.post<Config>(`${this.path}`, entity, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async find({ filter, config }: QueryMethodsInput<Config>): AxiosPromise<Config[]> {
    return this.get<Config[]>(`${this.path}`, {
      config: {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async findById(id: string, { config }: ConfigMethodsInput): AxiosPromise<Config> {
    return this.get<Config>(`${this.path}/${id}`, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async updateById(
    id: string,
    entity: ConfigModel,
    { config }: ConfigMethodsInput,
  ): AxiosPromise<Config> {
    return this.patch<Config>(`${this.path}/${id}`, entity, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async deleteById(id: string, { config }: ConfigMethodsInput): AxiosPromise<Config> {
    return this.delete<Config>(`${this.path}/${id}`, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async restoreById(id: string, { config }: ConfigMethodsInput): AxiosPromise<Config> {
    return this.put<Config>(
      `${this.path}/${id}/restore`,
      {},
      {
        config: {
          headers: {
            Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
          },
          ...config,
        },
      },
    );
  }

  public async updateBulk(
    entity: ConfigModel,
    { filter, config }: CountQueryMethodsInput<Config>,
  ): AxiosPromise<number> {
    return this.patch<number>(`${this.path}/bulk`, entity, {
      config: {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }
}
