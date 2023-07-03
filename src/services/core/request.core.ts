import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestOptions {
  client: AxiosInstance;
}

export abstract class RequestService {
  protected client: AxiosInstance;

  constructor(options: RequestOptions) {
    this.client = options.client;
  }

  protected async get<Res>(url: string, config?: AxiosRequestConfig): AxiosPromise<Res> {
    return this.client.get<Res>(url, config);
  }

  protected async delete<Res>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Res>> {
    return await this.client.delete<Res>(url, config);
  }

  protected async patch<Res, Req>(
    url: string,
    data: Req,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Res>> {
    return await this.client.patch<Res, AxiosResponse<Res>, Req>(url, data, config);
  }

  protected async post<Res, Req>(
    { url, data }: { url: string; data?: Req },
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Res>> {
    return await this.client.post<Res>(url, data, config);
  }

  protected async put<Res, Req = never>(
    { url, data }: { url: string; data?: Partial<Req> },
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Res>> {
    return await this.client.put<Res>(url, data, config);
  }
}
