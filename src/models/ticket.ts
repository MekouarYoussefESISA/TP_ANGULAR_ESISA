import { Major } from './major';

export interface Ticket {
  id?: number;
  title?: string;
  description?: string;
  date?: Date;
  studentId?: number;
  major?:Major;
  archived?:boolean;
}
