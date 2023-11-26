import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Major } from '../../../models/major';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student/student.service';
import { STUDENTS_MOCKED } from '../../../mocks/students.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public MAJOR_LIST: Major[] = [Major.SI, Major.GPE, Major.GP, Major.GM, Major.GE, Major.GB];
  public STUDENT_LIST:Student[] = [];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: Major,
      studentId: [''],
    });
    
    this.studentService.getStudents().subscribe((response) =>{
      this.STUDENT_LIST = response;
    })


    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    const selectedStudentId = Number(this.ticketForm.get('studentId').value);
    ticketToCreate.studentId = selectedStudentId;
    ticketToCreate.archived = false;
    this.ticketService.createTicket(ticketToCreate).subscribe(
      (error) => {
        console.error('Error creating ticket:', error);
      }
    );
    this.ticketForm.reset();
  }

}
