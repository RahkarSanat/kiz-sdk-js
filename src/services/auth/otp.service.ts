import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { AXIOS_CLIENT } from '../../common/infrastructure';
import { RequestService } from '../core/request.core';
import { MqttOtpResponse, verifyMqttOtpRequest, Void } from '../../common';
export class OtpService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  public async mqttOtp(config?: AxiosRequestConfig): AxiosPromise<MqttOtpResponse> {
    return this.get<MqttOtpResponse>(`${this.path}/mqtt`, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async verifyMqttOtp(
    otpVerify: verifyMqttOtpRequest,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Void<boolean>> {
    return this.post<Void<boolean>>(`${this.path}/verify`, otpVerify, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }
}
