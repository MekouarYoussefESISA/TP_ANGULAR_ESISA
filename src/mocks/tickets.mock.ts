import { Ticket } from '../models/ticket';
import { Major } from '../models/major';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Milan',
    description: '',
    date: dateToday,
    ​student: 'Paul',
    major: Major.GE
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    ​student: 'Anakin',
    major: Major.GE
  },
];
