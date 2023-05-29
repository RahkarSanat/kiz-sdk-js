import { MqttOtpResponse } from 'common/interfaces';

export class verifyMqttOtpRequest implements Pick<MqttOtpResponse, 'client_id' | 'otp'> {
  client_id!: string;
  otp!: number;
}
