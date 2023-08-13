import { CargoType, LoaderType, OrderStatus, PackagingType } from '../../enums';
import { BaseModel } from '../base.model';
import { OrderPriceModel } from './order-price.model';
import { OrderRequirementModel } from './order-requirement.dto';
import { AddressModel } from './address.model';

export class OrderModel extends BaseModel<OrderModel> {
  title!: string;
  weight!: number;
  packaging_type?: PackagingType;
  description?: string;

  sourceAddress!: AddressModel;
  destinationAddress!: AddressModel;

  orderRequirement!: OrderRequirementModel;
  loading_date!: Date;
  loader_type!: LoaderType;
  cargo_type!: CargoType;
  price?: OrderPriceModel;
  status!: OrderStatus;
}
