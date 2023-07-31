import { SortOrder } from 'mongoose';
import { Pagination, Projection, Query } from '../types';

export interface Filter<T = any, K = T> {
  query?: Query<T>;
  projection?: Projection<T>;
  pagination?: Pagination<K>;
  limit?: number;
  skip?: number;
  sort?: { [key in keyof K]: SortOrder | { $meta: 'textScore' } };
}

export type OneFilter<T = any> = Omit<Filter<T>, 'pagination' | 'limit' | 'skip' | 'sort'>;

export type CountFilter<T = any> = Omit<Filter<T>, 'pagination' | 'limit' | 'skip' | 'sort' | 'projection'>;
