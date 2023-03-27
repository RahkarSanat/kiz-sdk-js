import { Pagination, Projection, Query } from '../types';

export interface Filter<T = any, K = T> {
  query?: Query<T>;
  projection?: Projection<T>;
  pagination?: Pagination<K>;
}

export type OneFilter<T = any> = Omit<Filter<T>, 'pagination'>;

export type CountFilter<T = any> = Omit<Filter<T>, 'pagination' | 'projection'>;
