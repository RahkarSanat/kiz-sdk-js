import type Long from 'long';
import { GrantType } from '../../enums';

export interface AuthTokenRes {
  access_token?: string;
  token_type?: 'Bearer';
  expires_in?: number;
  refresh_token?: string;
  session?: string;
  scope?: string;
  code?: string;
  subjects?: string[];
  uid?: string;
}

export interface AuthTokenReq {
  grant_type: GrantType;
  app_id: string;
  client_id: string;
  client_secret: string;
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmation_code?: string;
  refresh_token?: string;
  scope?: string[];
  code?: string;
  subjects?: string[];
}

/**
 * for decrypt usage
 */

export interface AccessTokenObject {
  cid: string;
  aid?: string;
  uid?: string;
  subjects: string;
  scopes: string;
  session: string;

  iat?: Long;
  exp?: Long;
}

export interface JwtToken {
  t: 'A' | 'R';
  ip?: string;
  cid: string;
  aid?: string;
  uid?: string;
  subjects: string;
  scopes: string;
  session: string;
  client_id: string;
}
