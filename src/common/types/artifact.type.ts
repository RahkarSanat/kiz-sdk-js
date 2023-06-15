import { Artifact } from '../interfaces';
import { ArtifactModel } from '../models';

export type ArtifactMetadata = Pick<Artifact, 'metadata'>;

export type UpdateArtifactModel = ArtifactModel & { type?: string };
