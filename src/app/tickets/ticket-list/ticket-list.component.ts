import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { tick } from '@angular/core/testing';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public studentList: Student[] = [];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService, public studentService: StudentService) {
    // this.ticketService.getTickets().subscribe((response) =>{
    //   this.ticketList = response;
    // }
    // ); 
    // this.studentService.getStudents().subscribe((response) =>{
    //   this.studentList = response;
    // }
    // );
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.ticketService.getTickets().subscribe((response) =>{
      this.ticketList = response;
    }
    ); 
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }
  

  archiveTicket (ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }

  toggleArchivedTickets() {
    this.displayTicketArchived = !this.displayTicketArchived;
    console.log('displayTicketArchived', this.displayTicketArchived);
  }

  getStudentById(ticketId: number): Student {
    return this.studentList.find(student => student.id === ticketId);
  }

}
