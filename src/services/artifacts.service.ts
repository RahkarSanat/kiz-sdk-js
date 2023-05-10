import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import {
  Artifact,
  ArtifactMetadata,
  ArtifactModel,
  Count,
  Find,
  UpdateArtifactModel,
  Create,
  FindById,
  UpdateById,
  DeleteById,
  RestoreById,
  UpdateBulk,
} from '../common';
import { RequestService } from './core';
import { AXIOS_CLIENT } from '../common/infrastructure';

export class ArtifactsService extends RequestService<Artifact> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }
  public async count({
    filter,
    type,
    config,
  }: Count<Artifact> & {
    type: string;
  }): AxiosPromise<number> {
    return this.get<number>(`${this.path}/${type}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async create({
    entity,
    type,
    config,
  }: Create<ArtifactModel> & {
    type: string;
  }): AxiosPromise<Artifact> {
    return this.post<Artifact>(`${this.path}/${type}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async find({
    filter,
    type,
    config,
  }: Find<Artifact> & {
    type: string;
  }): AxiosPromise<Artifact> {
    return this.get<Artifact>(`${this.path}/${type}`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async findById(
    id: string,
    {
      type,
      config,
    }: FindById & {
      type: string;
    },
  ): AxiosPromise<Artifact> {
    return this.get<Artifact>(`${this.path}/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateById(
    id: string,
    {
      entity,
      type,
      config,
    }: UpdateById<ArtifactModel> & {
      type: string;
    },
  ): AxiosPromise<Artifact> {
    return this.patch<Artifact>(`${this.path}/${type}/${id}`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async deleteById(
    id: string,
    {
      type,
      config,
    }: DeleteById & {
      type: string;
    },
  ): AxiosPromise<Artifact> {
    return this.delete<Artifact>(`${this.path}/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async restoreById(
    id: string,
    {
      type,
      config,
    }: RestoreById & {
      type: string;
    },
  ): AxiosPromise<Artifact> {
    return this.put<Artifact>(`${this.path}/${type}/${id}/restore`, null, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateBulk({
    filter,
    entity,
    type,
    config,
  }: UpdateBulk<Artifact, UpdateArtifactModel> & {
    type: string;
  }): AxiosPromise<number> {
    return this.patch<number>(`${this.path}/${type}/bulk`, entity, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }

  public async updateMetadataByIdentity({
    identity,
    metadata,
    type,
    config,
  }: {
    identity: string;
    metadata: ArtifactMetadata;
    type: string;
    config?: AxiosRequestConfig;
  }): AxiosPromise<ArtifactMetadata> {
    return this.patch<ArtifactMetadata>(`${this.path}/${type}/${identity}/metadata`, metadata, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
