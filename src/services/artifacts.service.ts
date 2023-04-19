import { CreateAxiosDefaults } from 'axios';
import { Artifact } from '../common';
import { BaseService } from './core';

export class ArtifactsService extends BaseService<Artifact> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}
