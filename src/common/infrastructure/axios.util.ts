import axios, { CreateAxiosDefaults } from 'axios';
import { Exceptioner } from './exception.util';
import { ExceptionScope } from './exception-scope.enum';

export const AXIOS_CLIENT = (options?: CreateAxiosDefaults) => {
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
  return { client: axios.create(options) };
};
