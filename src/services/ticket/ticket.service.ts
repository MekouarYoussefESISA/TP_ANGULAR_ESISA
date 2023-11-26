import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
// import { BehaviorSubject } from 'rxjs/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
 
  private url = "http://localhost:9428/api/tickets"
  private ticketList: Ticket[] = [];  

  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);
  
  constructor(private http: HttpClient) {
    
  }

  // addTicket(ticket: Ticket) {
  //   // You need here to update the list of ticket and then update our observable (Subject) with the new list
  //   // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject

  //   let cleanTicket : Ticket = {};
  //   cleanTicket.id = ticket.id;
  //   cleanTicket.title = ticket.title;
  //   cleanTicket.description = ticket.description;
  //   cleanTicket.date = ticket.date;
  //   cleanTicket.studentId = ticket.studentId;
  //   cleanTicket.major = ticket.major;
  //   cleanTicket.archived = ticket.archived;

    
  //   console.log('ticketList before:', this.ticketList);
  //   this.ticketList.push(cleanTicket);
  //   this.tickets$.next(this.ticketList);
  //   console.log('ticketList after:', this.ticketList);
  // }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.url, ticket);
  }

  archiveTicket(ticket: Ticket) {
    // archive ticket
    ticket.archived != ticket.archived;
    this.http.put(`${this.url}/${ticket.id}`, ticket).subscribe();
  }

  getTickets() : Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url);
  }

  deleteTicketsByStudentId(studentId: number) {
    // delete all the tickets of the student

    let ticketsToDelete : Ticket[];
    this.getTickets().subscribe(
      (response) => {
        ticketsToDelete = response.filter(ticket => ticket.studentId === studentId);
        for (let ticket of ticketsToDelete) {
          this.http.delete(`${this.url}/${ticket.id}`).subscribe();
        }
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    ); 
  }


}
