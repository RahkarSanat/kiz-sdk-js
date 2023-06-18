import { BaseModel } from './base.model';

export class ArtifactModel<Meta> extends BaseModel<ArtifactModel<Meta>, Meta> {
  identity!: string;
  metadata!: Meta;
}
