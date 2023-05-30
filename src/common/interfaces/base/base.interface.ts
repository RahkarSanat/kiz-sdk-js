export interface Base {
  id?: string;
  owner?: string;
  zones?: string[];
  shares?: string[];
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
  deleted_at?: Date;
  deleted_by?: string;
  restored_at?: Date;
  restored_by?: string;
  tags?: string[];
}
