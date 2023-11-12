import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Major } from '../../../models/major';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';

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
      studentID: [''],
    });
    
    this.studentService.students$.subscribe((students) => this.STUDENT_LIST = students);


    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();

    // ticketToCreate.student = 'Me';
    const selectedStudentId = Number(this.ticketForm.get('studentID').value);

    if (selectedStudentId) {
      // const selectedStudent = this.STUDENT_LIST.find(student => student.id === selectedStudentId);
      this.STUDENT_LIST.forEach(student => {
        if (student.id === selectedStudentId) {

          console.log('selectedStudent', student);

          ticketToCreate.student = student;
        }
      }
      );
    }


    ticketToCreate.description = this.ticketForm.get('description').value;
    ticketToCreate.major = this.ticketForm.get('major').value;
    this.ticketService.addTicket(ticketToCreate);
  }

}
