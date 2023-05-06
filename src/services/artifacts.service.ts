import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { Artifact } from '../common';
import { BaseService } from './core';

export class ArtifactsService extends BaseService<Artifact> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  public async updateMetadataById(
    id: string,
    entity: Artifact,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Artifact> {
    return this.patch<Artifact>(`${this.path}/${id}/metadata`, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
