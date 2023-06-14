export interface Violation {
  id?: string;
  uid: string;
  driver_id: string;
  description?: string;
  fine_amount?: number;
  fine_unit?: string;
  occurrence_date?: Date;
  occurrence_place_address?: string;
  occurrence_place_description?: string;
}
