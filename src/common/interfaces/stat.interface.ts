import { Base } from './base';

export interface Stat<Meta = Record<string, unknown>> extends Base<Meta> {
  identity: string;
  amount: number;
  count: number;
  date: Date;
  flags?: { [x: string]: number | string }
}



export interface BulkStats {
  sum: number;
  average: number;
  count: number;
}
