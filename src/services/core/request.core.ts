import { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosErrorLog, Items } from '../../common';

export interface RequestOptions {
  client: AxiosInstance;
}

/**
 *
 * The RequestService class is a generic class that handles requests with a model and an interface.
 *
 * @param M Model, that we use since we do nt have DTO. use to handle request
 * @param I Interface, use to handle response
 * @param C custom type that shall be one of the allowed types, NOT any, unknown, never, object
 *
 */
export class RequestService<M, I> {
  protected client: AxiosInstance;

  constructor(options: RequestOptions) {
    this.client = options.client;
    options.client.interceptors.response.use(
      (response) => response,
      (err) => {
        const customLogger = (options.client.defaults as unknown as { errorLogger: AxiosErrorLog })
          ?.errorLogger;
        return customLogger
          ? customLogger(err)
          : new AxiosError(err?.response?.data.message, err?.response?.data.statusCode);
      },
    );
  }

  /**
   * This is a protected async function that sends a GET request using Axios and returns a promise with
   * the specified type.
   * @param {string} url - A string representing the URL to which the HTTP GET request will be sent.
   * @param {AxiosRequestConfig} config - config is an optional parameter of type AxiosRequestConfig
   * which is an interface that defines the configuration options for an Axios request. It includes
   * properties such as headers, params, data, timeout, and more. These options can be used to customize
   * the behavior of the HTTP request being made.
   * @returns The `get` method is returning an `AxiosPromise` with a generic type `C`, which can be
   * either an `I` object, an array of `I` objects (`Items<I>`), or a number, or a boolean. The method sends a GET
   * request to the specified `url` with the provided `config` options using the Axios HTTP client.
   */
  protected async get<C extends I | Items<I> | number | boolean>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<C> {
    return this.client.get<C>(url, config);
  }

  /**
   * This is a function that sends a DELETE request using Axios and returns a Promise
   * containing the response data.
   * @param {string} url - The URL of the resource that needs to be deleted.
   * @param {AxiosRequestConfig} config - The `config` parameter is an optional object that can be passed
   * to the `delete` method of an Axios instance. It contains various configuration options that can be
   * used to customize the HTTP request, such as headers, query parameters, request body, authentication
   * credentials, timeout, and response type. The `
   * @returns The `delete` method is returning a promise that resolves to an `AxiosResponse` object with
   * a generic type `I`. The response object contains information about the HTTP response such as status
   * code, headers, and data.
   */
  protected async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<I>> {
    return await this.client.delete<I>(url, config);
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
  protected async patch<C extends I | number>(
    url: string,
    data: Partial<M>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<C>> {
    return await this.client.patch<C>(url, data, config);
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
  protected async post(
    { url, data }: { url: string; data?: M },
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<I>> {
    return await this.client.post<I>(url, data, config);
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
  protected async put(
    { url, data }: { url: string; data?: Partial<M> },
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<I>> {
    return await this.client.put<I>(url, data, config);
  }
}
