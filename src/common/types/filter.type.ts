/* eslint-disable @typescript-eslint/no-explicit-any */

import { FilterQuery, ProjectionFields } from 'mongoose';

export type Query<T = any> = FilterQuery<T>;
export type Projection<T = any> = ProjectionFields<T>;
