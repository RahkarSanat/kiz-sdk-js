export interface MqttOtpResponse {
  client_id: string;
  expires_in: number;
  otp: number;
  username: string;
}
