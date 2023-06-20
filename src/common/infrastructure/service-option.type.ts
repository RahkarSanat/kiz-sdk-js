import { CreateAxiosDefaults } from 'axios';
import { interceptor } from './interceptor.interface';

export type ServiceOption = CreateAxiosDefaults & {
  requestInterceptor?: interceptor;
  responseInterceptor?: interceptor;
};
