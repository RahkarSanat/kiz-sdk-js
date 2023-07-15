import { ExceptionScope, Exceptioner, ServiceOption } from '../common/infrastructure';
import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { BaseService } from './core';
import { BulkStats, Count, QueryMethodsInput, Stat, StatModel } from '../common';

export class StatsService extends BaseService<StatModel, Stat> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }

  public async create<Meta>(): AxiosPromise<Stat<Meta>> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`create` is not implemented, please use `consume` instead',
    });
  }

  public async updateOne<Meta>(): AxiosPromise<Stat<Meta>> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`updateOne` is not implemented, please use `consume` instead',
    });
  }

  public async updateById<Meta>(): AxiosPromise<Stat<Meta>> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`updateById` is not implemented, please use `consume` instead',
    });
  }

  public async updateBulk(): AxiosPromise<Count> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`updateBulk` is not implemented, please use `consume` instead',
    });
  }

  public async consume<Meta>(
    model: StatModel<Meta>,
    { config }: { config?: AxiosRequestConfig } = {},
  ): AxiosPromise<Stat<Meta>> {
    return this.post(
      { url: `${this.path}/consume`, data: model },
      {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public async bulkStats<Meta>({
    filter,
    config,
  }: QueryMethodsInput<StatModel<Meta>> = {}): AxiosPromise<BulkStats> {
    return this.get(`${this.path}/bulk`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });
  }
}
