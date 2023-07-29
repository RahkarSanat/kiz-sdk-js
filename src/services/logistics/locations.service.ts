import { AxiosPromise, AxiosRequestConfig } from 'axios';
import {
  Count,
  CountQueryMethodsInput,
  Items,
  Location,
  LocationModel,
  OneFilter,
  OneQueryMethodsInput,
  QueryMethodsInput,
} from '../../common';
import { AXIOS_CLIENT, ServiceOption } from '../../common/infrastructure';
import { RequestService } from '../core';

export class LocationsService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(AXIOS_CLIENT(options));
  }

  public async count<Meta, Prop>(
    type: string,
    { filter, config }: CountQueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Count> {
    return this.get(`${this.path}/${type}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create<Meta, Prop>(
    type: string,
    model: LocationModel<Meta, Prop>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.post(
      { url: `${this.path}/${type}`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async find<Meta, Prop>(
    type: string,
    { filter, config }: QueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Items<Location<Meta, Prop>>> {
    return this.get(`${this.path}/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findById<Meta, Prop>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.get(`${this.path}/${type}/${id}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findOne<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.get(`${this.path}/${type}/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateBulk<Meta, Prop>(
    type: string,
    entity: LocationModel<Meta, Prop>,
    { filter, config }: CountQueryMethodsInput<Location<Meta, Prop>>,
  ): AxiosPromise<Count> {
    return this.patch(`${this.path}/${type}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById<Meta, Prop>(
    type: string,
    id: string,
    model: LocationModel<Meta, Prop>,
    { filter, config }: OneQueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.patch(`${this.path}/${type}/${id}`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateOne<Meta, Prop>(
    type: string,
    model: LocationModel<Meta, Prop>,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.patch(`${this.path}/${type}/one`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteBulk<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.delete(`${this.path}/${type}/bulk`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById<Meta, Prop>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.delete(`${this.path}/${type}/${id}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteOne<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.delete(`${this.path}/${type}/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreBulk<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.put(
      { url: `${this.path}/${type}/restore` },
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async restoreById<Meta, Prop>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.put(
      { url: `${this.path}/${type}/${id}/restore` },
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async restoreOne<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.put(
      { url: `${this.path}/${type}/restore` },
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async destroyBulk<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Count> {
    return this.delete(`${this.path}/${type}/destroy`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async destroyById<Meta, Prop>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<LocationModel<Meta, Prop>> = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.delete(`${this.path}/${type}/${id}/destroy`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async destroyOne<Meta, Prop>(
    type: string,
    filter: OneFilter<LocationModel<Meta, Prop>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Location<Meta, Prop>> {
    return this.delete(`${this.path}/${type}/destroy/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
