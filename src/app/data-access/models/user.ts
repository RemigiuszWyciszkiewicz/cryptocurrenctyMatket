import { ID } from '@datorama/akita';

export interface User {
  _id: ID;
  name: string;
  password: string;
  email: string;
  usd: number;
  userRank: number;
}
