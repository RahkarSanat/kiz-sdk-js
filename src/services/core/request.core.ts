/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { ConfigMethodsInput } from 'common';

export interface RequestOptions {
  client: AxiosInstance;
}

export class RequestService<T = any> {
  protected client: AxiosInstance;

  constructor(options: RequestOptions) {
    this.client = options.client;
    this.client.interceptors.response.use(
      (response) => response,
      (err) => {
        console.log('error occure');
        console.log(err?.response?.data);
      },
    );
  }

  protected async get<M = T>(url: string, { config }: ConfigMethodsInput): AxiosPromise<M> {
    return this.client.get<M>(url, config);
  }

  protected async post<M = T>(
    url: string,
    data: any = {},
    { config }: ConfigMethodsInput,
  ): Promise<AxiosResponse<M>> {
    return await this.client.post<M>(url, data, config);
  }

  protected async put<M = T>(
    url: string,
    data: any,
    { config }: ConfigMethodsInput,
  ): Promise<AxiosResponse<M>> {
    return await this.client.put<M>(url, data, config);
  }

  protected async delete<M = T>(url: string, { config }: ConfigMethodsInput): Promise<AxiosResponse<M>> {
    return await this.client.delete<M>(url, config);
  }

  protected async patch<M = T>(
    url: string,
    data: any = {},
    { config }: ConfigMethodsInput,
  ): Promise<AxiosResponse<M>> {
    return await this.client.patch<M>(url, data, config);
  }
}
