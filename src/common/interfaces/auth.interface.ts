import { GrantType, Scope } from '../enums';

export interface AuthTokenRes {
  access_token?: string;
  token_type?: 'Bearer';
  expires_in?: number;
  refresh_token?: string;
  session?: string;
  scope?: string;
  code?: string;
}

export interface AuthTokenReq {
  grant_type: GrantType;
  app_id: string;
  domain: string;
  client_id: string;
  client_secret: string;
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmation_code?: string;
  refresh_token?: string;
  scope?: Scope[];
  code?: string;
  roles?: string[];
}
