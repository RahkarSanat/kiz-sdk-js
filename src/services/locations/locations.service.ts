import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { BaseService } from '../core';
import { CountFilter, LocationModel } from 'common';
import { Location } from '../../common/interfaces';
export class LocationService extends BaseService {
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

  public async create<LocationModel, Location>(
    entity: Location,
    config?: AxiosRequestConfig,
  ): Promise<LocationModel> {
    const { data } = await this.post<LocationModel>(this.path, entity, {
      headers: {
        Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
      },
      ...config,
    });

    return data;
  }
}
