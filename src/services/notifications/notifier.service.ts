import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Notifier, NotifierModel } from 'common';
export class NotifierService extends BaseService<Notifier> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  async byReason(
    entity: Omit<NotifierModel, 'template_id' | 'recipient'>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Notifier> {
    return this.post(`${this.patch}/reason`, entity, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  async byCustom(entity: NotifierModel, config?: AxiosRequestConfig): AxiosPromise<Notifier> {
    return this.post(`${this.patch}/custom`, entity, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }
}
