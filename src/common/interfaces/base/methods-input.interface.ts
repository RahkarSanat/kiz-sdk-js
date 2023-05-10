import { AxiosRequestConfig } from 'axios';
import { CountFilter } from '../filter.interface';

/**
 *
 * `M` stands for model
 *
 */

export interface QueryMethodsInput<T = any> {
  filter?: CountFilter<T>;
  config?: AxiosRequestConfig;
}

export interface CommandMethodsInput<M = any> {
  entity?: M;
  config?: AxiosRequestConfig;
}

export interface UpdateById<M> extends CommandMethodsInput<M> {
  entity: M;
}

// You can follow the above pattern to convert any `type` to `interface`

export type FindById = Omit<QueryMethodsInput, 'filter'>;
export type DeleteById = Omit<CommandMethodsInput, 'entity'>;
export type RestoreById = DeleteById;

export type Count<T> = QueryMethodsInput<T>;

export type Find<T> = QueryMethodsInput<T>;

export type Create<M> = CommandMethodsInput<M>;

export type UpdateBulk<T, M> = QueryMethodsInput<T> & CommandMethodsInput<M>;
