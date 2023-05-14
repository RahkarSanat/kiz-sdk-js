/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError, AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { AxiosErrorLog, ConfigMethodsInput } from 'common';

export interface RequestOptions {
  client: AxiosInstance;
}

export class RequestService<T = any> {
  protected client: AxiosInstance;

  constructor(options: RequestOptions) {
    this.client = options.client;
    options.client.interceptors.response.use(
      (response) => response,
      (err) => {
        const customLogger = (options.client.defaults as unknown as { errorLogger: AxiosErrorLog })
          ?.errorLogger;
        if (customLogger) {
          return customLogger(err);
        } else {
          throw new AxiosError(err?.response?.data.message, err?.response?.data.statusCode);
        }
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
