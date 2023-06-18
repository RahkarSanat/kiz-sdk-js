/* eslint-disable @typescript-eslint/no-explicit-any */

import { FilterQuery, ProjectionFields, SortOrder } from 'mongoose';

export type Query<T = any> = FilterQuery<T>;
export type Projection<T = any> = ProjectionFields<T>;

export type Pagination<K = any> = {
  skip?: number;
  limit?: number;
  sort?: { [key in keyof K]: SortOrder | { $meta: 'textScore' } };
};
