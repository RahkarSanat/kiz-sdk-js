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
