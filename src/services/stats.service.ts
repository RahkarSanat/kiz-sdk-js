import { ExceptionScope, Exceptioner, ServiceOption } from 'common/infrastructure';
import { StatModel } from 'common/models/stats.model';
import { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import { BulkStats, Stat } from 'common/interfaces/stat.interface';
import { BaseService } from './core';
import { CountQueryMethodsInput, OneFilter, QueryMethodsInput } from 'common';

export class StatsService extends BaseService<StatModel, Stat> {
  constructor(protected readonly path: string, protected readonly options?: ServiceOption) {
    super(path, options);
  }
  public async consume(model: StatModel, { config }: { config?: AxiosRequestConfig } = {}): AxiosPromise<Stat> {
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

  public async bulkStats({ filter, config }: QueryMethodsInput<StatModel> = {}): AxiosPromise<BulkStats> {
    return this.get(
      `${this.path}/bulk`,
      {
        params: filter,
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    );
  }

  public override updateBulk(): AxiosPromise<number> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`updateBulk` is not implemented, please use `consume` instead',
    });
  }

  public override updateOne(): AxiosPromise<Stat<Record<string, unknown>>> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`updateOne` is not implemented, please use `consume` instead',
    });
  }

  public updateById(): AxiosPromise<Stat<Record<string, unknown>>> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`updateById` is not implemented, please use `consume` instead',
    });
  }

  public create(): AxiosPromise<Stat<Record<string, unknown>>> {
    throw new Exceptioner({
      scope: ExceptionScope.Axios,
      message: '`create` is not implemented, please use `consume` instead',
    });
  }

}


