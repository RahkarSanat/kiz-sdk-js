import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import {
  Artifact,
  CountQueryMethodsInput,
  QueryMethodsInput,
  ArtifactModel,
  OneFilter,
  Items,
  OneQueryMethodsInput,
} from '../common';
import { RequestService } from './core';
import { AXIOS_CLIENT } from '../common/infrastructure';

export class ArtifactsService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  public async count<Meta>(
    type: string,
    { filter, config }: CountQueryMethodsInput<ArtifactModel<Meta>> = {},
  ): AxiosPromise<number> {
    return this.get(`${this.path}/${type}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create<Meta>(
    type: string,
    model: ArtifactModel<Meta>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Artifact<Meta>> {
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

  public async find<Meta>(
    type: string,
    { filter, config }: QueryMethodsInput<ArtifactModel<Meta>> = {},
  ): AxiosPromise<Items<Artifact<Meta>>> {
    return this.get(`${this.path}/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  /**
   * This is a TypeScript function that finds an artifact by its ID and returns a promise with an Axios
   * response.
   * @param {string} type - The type of artifact to find, which is a string value.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * artifact that needs to be retrieved.
   * @param  {AxiosRequestConfig} { config } - optional config.
   * @returns The `findById` method is returning an `AxiosPromise` of type `Artifact`.
   */
  public async findById<Meta>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<ArtifactModel<Meta>> = {},
  ): AxiosPromise<Artifact<Meta>> {
    return this.get(`${this.path}/${type}/${id}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findOne<Meta>(
    type: string,
    filter: OneFilter<ArtifactModel<Meta>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Artifact<Meta>> {
    return this.get(`${this.path}/one/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById<Meta>(
    type: string,
    id: string,
    model: ArtifactModel<Meta>,
    { filter, config }: OneQueryMethodsInput<ArtifactModel<Meta>> = {},
  ): AxiosPromise<Artifact<Meta>> {
    return this.patch(`${this.path}/${type}/${id}`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateOne<Meta>(
    type: string,
    model: ArtifactModel<Meta>,
    filter: OneFilter<ArtifactModel<Meta>>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Artifact<Meta>> {
    return this.patch(`${this.path}/${type}/one`, model, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById<Meta>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<ArtifactModel<Meta>> = {},
  ): AxiosPromise<Artifact<Meta>> {
    return this.delete(`${this.path}/${type}/${id}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteOne<Meta>(
    type: string,
    filter: OneFilter<ArtifactModel<Meta>>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact<Meta>> {
    return this.delete(`${this.path}/${type}/one`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreById<Meta>(
    type: string,
    id: string,
    { filter, config }: OneQueryMethodsInput<ArtifactModel<Meta>> = {},
  ): AxiosPromise<Artifact<Meta>> {
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

  public async restoreOne<Meta>(
    type: string,
    filter: OneFilter<ArtifactModel<Meta>>,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact<Meta>> {
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

  public async updateBulk<Meta>(
    type: string,
    entity: ArtifactModel<Meta>,
    { filter, config }: CountQueryMethodsInput<Artifact<Meta>>,
  ): AxiosPromise<number> {
    return this.patch(`${this.path}/${type}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateMetadataByIdentity<Meta>(
    type: string,
    identity: string,
    metadata: Meta,
    { config }: { config?: AxiosRequestConfig },
  ): AxiosPromise<Artifact<Meta>> {
    return this.patch(`${this.path}/${type}/${identity}/metadata`, metadata, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
