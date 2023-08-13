import { Geometry } from '../../types';

export class AddressModel {
  city!: string;
  address?: string;
  address_specification?: string;
  geometry!: Geometry;
}
