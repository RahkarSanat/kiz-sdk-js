import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Notifier, NotifierModel } from 'common';
export class NotifierService extends BaseService<NotifierModel, Notifier> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  async byReason(
    model: Omit<NotifierModel, 'template_id' | 'recipient'>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Notifier> {
    return this.post(
      { url: `${this.patch}/reason`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  async byCustom(model: NotifierModel, config?: AxiosRequestConfig): AxiosPromise<Notifier> {
    return this.post(
      { url: `${this.patch}/custom`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }
}
