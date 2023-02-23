import { Ticket } from '../models/ticket';
const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: {'id': 1,'nom': 'Hab','prenom': 'sonia'},
    major: 'SI',
    archived: false,
    
  },
  {
    title: 'SI6 in Germany',
    description: 'Description du voyage',
    date: dateToday,
    student: {'id': 1,'nom': 'Bill','prenom': 'Laura'},
    major: 'GE',
    archived: true,
  },
  {
    title: 'S17 in Berlin',
    description: 'Description du voyage',
    date: dateToday,
    student: {'id': 1,'nom': 'Jerare','prenom': 'Olivier'},
    major: 'GE',
    archived: true,
  },
];
