import { Major } from './major';

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?:Major;
  archived?:boolean;
}
