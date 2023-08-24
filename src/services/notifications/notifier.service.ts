import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { BaseService } from '../core';
import { NotifierModel, NotifyByReason } from '../../common';
import { ServiceOption } from '../../common/infrastructure';
export class NotifierService extends BaseService<NotifierModel, NotifyByReason> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }

  async byReason(model: NotifierModel, config?: AxiosRequestConfig): AxiosPromise<NotifyByReason> {
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

  // async byCustom();
}
