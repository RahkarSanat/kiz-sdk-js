/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestOptions {
  client: AxiosInstance;
}

export class RequestService {
  protected client: AxiosInstance;

  constructor(options: RequestOptions) {
    this.client = options.client;
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.client.get<T>(url, config);
  }

  protected async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.client.post<T>(url, data, config);
  }

  protected async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.client.put<T>(url, data, config);
  }

  protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.client.delete<T>(url, config);
  }

  protected async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.client.patch<T>(url, data, config);
  }
}
