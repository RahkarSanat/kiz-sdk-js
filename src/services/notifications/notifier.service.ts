import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { BaseService } from '../core';
import { Notifier, NotifierModel } from '../../common';
import { ServiceOption } from 'common/infrastructure';
export class NotifierService extends BaseService<NotifierModel, Notifier> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }

  async byReason(
    model: Omit<NotifierModel, 'template_id' | 'recipient'>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Notifier> {
    return this.post(
      { url: `${this.path}/reason`, data: model },
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
      { url: `${this.path}/custom`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }
}
