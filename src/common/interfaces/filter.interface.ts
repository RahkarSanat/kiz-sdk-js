import { SortOrder } from 'mongoose';
import { Projection, Query } from '../types';

export interface Filter<T = any, K = T> {
  query?: Query<T>;
  projection?: Projection<T>;
  limit?: number;
  skip?: number;
  sort?: { [key in keyof K]: SortOrder | { $meta: 'textScore' } };
}

export type OneFilter<T = any> = Omit<Filter<T>, 'limit' | 'skip' | 'sort'>;

export type CountFilter<T = any> = Omit<Filter<T>, 'limit' | 'skip' | 'sort' | 'projection'>;
