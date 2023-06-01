import { Artifact } from 'common/interfaces';
import { ArtifactModel } from 'common/models';

export type ArtifactMetadata = Pick<Artifact, 'metadata'>;

export type UpdateArtifactModel = ArtifactModel & { type?: string };
