import { Ticket } from '../models/ticket';
import { Major } from '../models/major';
import { Student } from '../models/student';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();
const studentList: Student[] = STUDENTS_MOCKED;

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Milan',
    description: '',
    date: dateToday,
    student: studentList[0],
    major: Major.GE,
    archived: false

  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: studentList[1],
    major: Major.GE,
    archived: false
  },
  {
    title: 'SI6 in Madrid',
    description: 'Description du voyage',
    date: dateToday,
    student: studentList[0],
    major: Major.GP,
    archived: true
  }
];
