import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { Major } from 'src/models/major';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  ticketHasBeenArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();


  
  major = Major;
  student: Student;

  constructor(public studentService: StudentService) {
  }

  ngOnInit() {
    this.getStudent();
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  archiveTicket() {
    let ticket: Ticket = {};
    ticket.id = this.ticket.id;
    ticket.title = this.ticket.title;
    ticket.description = this.ticket.description;
    ticket.date = this.ticket.date;
    ticket.studentId = this.ticket.studentId;
    ticket.major = this.ticket.major;
    ticket.archived = !this.ticket.archived;
    this.ticketHasBeenArchived.emit(ticket);
  }

  getStudent () {
    this.studentService.getStudent(this.ticket.studentId).subscribe((response) =>{
      this.student = response;
    });
  }
}
