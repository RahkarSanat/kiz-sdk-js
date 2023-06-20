import { AxiosInterceptorOptions } from 'axios';

export interface interceptor {
  onFulfilled?: ((value: any) => any | Promise<any>) | null;
  onRejected?: ((error: any) => any) | null;
  options?: AxiosInterceptorOptions;
}
