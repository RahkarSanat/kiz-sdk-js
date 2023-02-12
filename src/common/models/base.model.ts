export class BaseModel<T> {
  id!: string;
  owner!: string;
  shares?: string[];
  clients!: string[];
  created_at!: Date;
  created_by!: string;
  created_in!: string;
  updated_at?: Date;
  updated_by?: string;
  updated_in?: string;
  deleted_at?: Date;
  deleted_by?: string;
  deleted_in?: string;
  restored_at?: Date;
  restored_by?: string;
  restored_in?: string;
  version?: string;
  tags?: string[];

  constructor(data?: Partial<T>) {
    if (data) Object.assign(this, data);
  }
}
