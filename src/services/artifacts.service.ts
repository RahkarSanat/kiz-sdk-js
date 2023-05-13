import { AxiosPromise, CreateAxiosDefaults } from 'axios';
import {
  Artifact,
  ArtifactMetadata,
  CountQueryMethodsInput,
  ConfigMethodsInput,
  QueryMethodsInput,
} from '../common';
import { RequestService } from './core';
import { AXIOS_CLIENT } from '../common/infrastructure';

export class ArtifactsService extends RequestService<Artifact> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }
  public async count(
    type: string,
    { filter, config }: CountQueryMethodsInput<Artifact>,
  ): AxiosPromise<number> {
    return this.get<number>(`${this.path}/${type}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create(
    type: string,
    entity: Artifact,
    { config }: ConfigMethodsInput,
  ): AxiosPromise<Artifact> {
    return this.post<Artifact>(`${this.path}/${type}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async find(
    type: string,
    { filter, config }: QueryMethodsInput,
  ): AxiosPromise<{ items: Artifact[] }> {
    return this.get<{ items: Artifact[] }>(`${this.path}/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findById(type: string, id: string, { config }: ConfigMethodsInput): AxiosPromise<Artifact> {
    return this.get<Artifact>(`${this.path}/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById(
    type: string,
    id: string,
    entity: Artifact,
    { config }: ConfigMethodsInput,
  ): AxiosPromise<Artifact> {
    return this.patch<Artifact>(`${this.path}/${type}/${id}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById(type: string, id: string, { config }: ConfigMethodsInput): AxiosPromise<Artifact> {
    return this.delete<Artifact>(`${this.path}/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreById(type: string, id: string, { config }: ConfigMethodsInput): AxiosPromise<Artifact> {
    return this.put<Artifact>(`${this.path}/${type}/${id}/restore`, null, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateBulk(
    type: string,
    entity: Artifact,
    { filter, config }: QueryMethodsInput,
  ): AxiosPromise<number> {
    return this.patch<number>(`${this.path}/${type}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateMetadataByIdentity(
    type: string,
    identity: string,
    metadata: ArtifactMetadata,
    { config }: ConfigMethodsInput,
  ): AxiosPromise<ArtifactMetadata> {
    return this.patch<ArtifactMetadata>(`${this.path}/${type}/${identity}/metadata`, metadata, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
