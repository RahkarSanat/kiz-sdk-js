export interface OtpMqttReq {
  type: string;
  action: string;
  topics: string[];
}

export interface OtpMqttRes {
  username: string;
  password: number;
  client_id: string;
  topics: string[];
  type: string;
  action: string;
  expires_in: number;
}

export interface OtpMqttVerifyReq {
  username: string;
  password: string;
  client_id: string;
}

export type OtpMqttVerifyRes = OtpMqttRes;
