import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { BaseService } from './core';
import { CountFilter } from 'common';
import { Location } from '../common/interfaces';
export class LocationsService extends BaseService<Location> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }

  public async count<Location>(filter?: CountFilter<Location>, config?: AxiosRequestConfig): Promise<number> {
    const { data } = await this.get<number>(`${this.path}/count`, {
      params: filter,
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }
}
