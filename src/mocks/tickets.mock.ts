import { enum_major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: 'c\'est un humoriste',
    date: dateToday,
    student: 'Paul Mirabell',
    major: enum_major.SI
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: enum_major.SI
  },
  {
    title: 'DI6 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Bernard',
    major: enum_major.GL
  },

];
