import {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import * as AxiosLogger from 'axios-logger';

export interface RequestOptions {
  client: AxiosInstance;
}

export class RequestService {
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

  /**
   * This is a protected async function that sends a PATCH request to a specified URL with provided data
   * and configuration using Axios library in TypeScript.
   * @param {string} url - A string representing the URL to which the PATCH request will be sent.
   * @param {M} data - The `data` parameter is of type `M`, which means it can be any type that extends
   * the `I` interface. It represents the data that will be sent in the request body when making a PATCH
   * request to the specified `url`.
   * @param {AxiosRequestConfig} config - `config` is an optional parameter of type `AxiosRequestConfig`
   * that can be passed to the `patch` method. It is used to configure the request, such as setting
   * headers, timeout, or authentication credentials. It can also be used to override the default
   * configuration of the Axios instance used
   * @returns a Promise that resolves to an AxiosResponse object with a generic type parameter C, which
   * can be either an object of type I or a number.
   */
  protected async patch<Res, Req>(
    url: string,
    data: Req,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Res>> {
    return await this.client.patch<Res, AxiosResponse<Res>, Req>(url, data, config);
  }

  /**
   * This is a function that sends a POST request using Axios and returns a Promise containing
   * the response data.
   * @param - { url, data } a string representing the URL to which the HTTP POST request will be sent
   * and data will bring one request body to distinction.
   * @param {AxiosRequestConfig} config - config is an optional parameter of type AxiosRequestConfig that
   * can be passed to the Axios client's post method. It allows for additional configuration options to
   * be set for the HTTP request, such as headers, timeout, and authentication credentials.
   * @returns The `post` method is returning a Promise that resolves to an `AxiosResponse` object with a
   * generic type `I`. The `AxiosResponse` object contains the response data, status code, headers, and
   * other information related to the HTTP response.
   */
  protected async post<Res, Req>(
    { url, data }: { url: string; data?: Req },
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Res>> {
    return await this.client.post<Res>(url, data, config);
  }

  /**
   * This is a function that sends a PUT request with optional data and configuration and
   * returns a Promise of the AxiosResponse.
   * @param  - - `url`: a string representing the URL to which the PUT request will be sent.
   * @param {AxiosRequestConfig} config - config is an optional parameter of type AxiosRequestConfig that
   * can be passed to the Axios client's put method. It allows for additional configuration options to be
   * set for the HTTP request, such as headers, timeout, and authentication credentials.
   * @returns The `put` method is returning a Promise that resolves to an `AxiosResponse` object with a
   * generic type `I`.
   */
  protected async put<Res, Req>(
    { url, data }: { url: string; data?: Partial<Req> },
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Res>> {
    return await this.client.put<Res>(url, data, config);
  }
}
