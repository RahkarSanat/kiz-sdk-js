import { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { AXIOS_CLIENT } from '../../common/infrastructure';
import { RequestService } from '../core/request.core';
import { OtpMqttReqModel, OtpMqttRes, OtpMqttVerifyReqModel, OtpMqttVerifyRes } from 'common';
export class OtpMqttService extends RequestService {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }

  public async optMqtt(otp: OtpMqttReqModel, config?: AxiosRequestConfig): AxiosPromise<OtpMqttRes> {
    return this.post<OtpMqttRes>(`${this.path}/mqtt`, otp, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }

  public async otpMqttVerify(
    otpVerify: OtpMqttVerifyReqModel,
    config?: AxiosRequestConfig,
  ): AxiosPromise<OtpMqttVerifyRes> {
    return this.post<OtpMqttVerifyRes>(`${this.path}/verify`, otpVerify, {
      config: {
        headers: {
          Authorization: `Bearer ${(config ?? this.options)?.headers?.common?.Authorization}`,
        },
        ...config,
      },
    });
  }
}
