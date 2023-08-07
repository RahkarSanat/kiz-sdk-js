import { CargoType, LoaderType, OrderStatus, PackagingType } from '../enums';
import { Base } from './base';
import { Geometry } from '../types';

export interface Order extends Base {
  title: string;
  weight: number;
  packaging_type?: PackagingType;
  description?: string;
  sourceAddress: Address;
  destinationAddress: Address;
  orderRequirement: OrderRequirement;
  loading_date: Date;
  loader_type: LoaderType;
  cargo_type: CargoType;
  payment?: OrderPayment;
  status: OrderStatus;
}

export interface Address {
  city: string;
  address?: string;
  address_specification?: string;
  geometry: Geometry;
}

export interface OrderRequirement {
  worker?: number;
  guarantee?: number;
}

export interface OrderPayment {
  fix_cost?: boolean;
  amount: number;
}
