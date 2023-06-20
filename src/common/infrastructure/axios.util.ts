import axios from 'axios';
import { Exceptioner } from './exception.util';
import { ExceptionScope } from './exception-scope.enum';
import { ServiceOption } from 'common/interfaces';

export const AXIOS_CLIENT = (options?: ServiceOption) => {
  if (!options)
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: 'options is required',
      info: options,
    });
  if (!options?.baseURL)
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`BaseURl` is required',
    });

  const client = axios.create(options);

  const { requestInterceptor, responseInterceptor } = options;

  client.interceptors.request.use(
    requestInterceptor?.onFulfilled,
    requestInterceptor?.onFulfilled,
    requestInterceptor?.options,
  );

  client.interceptors.response.use(
    responseInterceptor?.onFulfilled,
    responseInterceptor?.onFulfilled,
    responseInterceptor?.options,
  );

  return { client };
};
