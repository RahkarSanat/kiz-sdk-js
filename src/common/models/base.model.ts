export class BaseModel<T, Meta = Record<string, unknown>> {
  id?: string;
  owner?: string;
  shares?: string[];
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
  deleted_at?: Date;
  deleted_by?: string;
  restored_at?: Date;
  restored_by?: string;
  version?: string;
  tags?: string[];
  metadata?: Meta;

  constructor(data?: Partial<T>) {
    if (data) Object.assign(this, data);
  }
}
