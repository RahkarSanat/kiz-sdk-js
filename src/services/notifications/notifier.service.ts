import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { BaseService } from '../core';
import { ServiceOption } from '../../common/infrastructure';
import { NotifyByCustom, NotifyByCustomModel, NotifyByReason, NotifyByReasonModel } from 'common';
export class NotifierService extends BaseService<
  NotifyByReasonModel | NotifyByCustomModel,
  NotifyByReason | NotifyByCustom
> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }

  async byReason(model: NotifyByReasonModel, config?: AxiosRequestConfig): AxiosPromise<NotifyByReason> {
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

  async byCustom(model: NotifyByCustomModel, config?: AxiosRequestConfig): AxiosPromise<NotifyByCustom> {
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
