import { AxiosRequestConfig } from 'axios';
import { CountFilter, Filter, OneFilter } from '../filter.interface';

/**
 *
 * `M` stands for model
 *
 */

export interface QueryMethodsInput<T = any> {
  filter?: Filter<T>;
  config?: AxiosRequestConfig;
}

export interface OneQueryMethodsInput<T = any> {
  filter?: OneFilter<T>;
  config?: AxiosRequestConfig;
}

export interface CountQueryMethodsInput<T = any> {
  filter?: CountFilter<T>;
  config?: AxiosRequestConfig;
}

export interface CommandMethodsInput<M = any> {
  entity?: M;
  config?: AxiosRequestConfig;
}

// You can follow the above pattern to convert any `type` to `interface`

export type Count<T> = QueryMethodsInput<T>;
export type Create<M> = CommandMethodsInput<M>;
export type Find<T> = QueryMethodsInput<T>;
export type UpdateById<M> = Omit<CommandMethodsInput<M>, 'entity'>;
export type FindById = Omit<QueryMethodsInput, 'filter'>;
export type DeleteById = Omit<CommandMethodsInput, 'entity'>;
export type RestoreById = DeleteById;
export type UpdateBulk<M> = QueryMethodsInput<M>;
