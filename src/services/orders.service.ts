import { ServiceOption } from '../common/infrastructure';
import { Order, OrderModel } from '../common';
import { BaseService } from './core';

export class OrdersService extends BaseService<OrderModel, Order> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
}
