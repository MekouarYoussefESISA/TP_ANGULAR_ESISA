import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'SI',
    archived: false,
    
  },
  {
    title: 'SI6 in Germany',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'GE',
    archived: true,
  },
  {
    title: 'S17 in Berlin',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Sonia',
    major: 'GE',
    archived: true,
  },
];
