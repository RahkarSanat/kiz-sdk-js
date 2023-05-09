import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { Notifier } from '../../common/interfaces';
import { NotifierModel } from 'common';
export class NotifierService extends BaseService<Notifier> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  public async lookup(entity: NotifierModel, config?: AxiosRequestConfig): AxiosPromise<Notifier> {
    return this.post<Notifier>(this.path, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
