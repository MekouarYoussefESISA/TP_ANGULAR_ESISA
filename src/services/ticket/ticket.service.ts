import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
// import { BehaviorSubject } from 'rxjs/index';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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


  createTicket(ticket: Ticket): void {
    this.http.post<Ticket>(this.url, ticket)
    .pipe (
      tap (()=> {
        // this.ticketList.push(ticket);
        this.tickets$.next(this.ticketList);
      })
    ).subscribe(
      (response) => {
        console.log('Ticket created:', response);
      },
      (error) => {
        console.error('Error creating ticket:', error);
      }
    );
  }

  archiveTicket(ticketToUpdate: Ticket) {
    // archive ticket
    // ticket.archived != ticket.archived;
    return this.http.put(`${this.url}/${ticketToUpdate.id}`, ticketToUpdate)
    .pipe (
      tap (()=> {
        // console.log('ticket to update', ticketToUpdate);
        // this.ticketList.find(ticket => ticket.id === ticketToUpdate.id).archived = !ticketToUpdate.archived;
        this.tickets$.next(this.ticketList);
      })
    ).subscribe(
      (response) => {
        console.log('Ticket archived:', response);
      },
      (error) => {
        console.error('Error archiving ticket:', error);
      }
    );
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
