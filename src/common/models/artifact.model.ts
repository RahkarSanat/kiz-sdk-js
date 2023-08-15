import { BaseModel } from './base.model';

export class ArtifactModel<Meta> extends BaseModel<ArtifactModel<Meta>, Meta> {
  identity!: string;
  type!: string;
  metadata!: Meta;
}
