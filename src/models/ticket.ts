import { Major } from './major';
import { Student } from './student';

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?:Major;
  archived?:boolean;
}
