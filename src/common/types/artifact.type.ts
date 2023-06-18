import { ArtifactModel } from '../models';

export type UpdateArtifactModel<Meta> = ArtifactModel<Meta> & { type?: string };
