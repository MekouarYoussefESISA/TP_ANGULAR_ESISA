import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{

  public studentForm: FormGroup;


  constructor(public formBuilder: FormBuilder, public studentService: StudentService) { 
    this.studentForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      mail: [''],
      notes: [' ']
    });
  }

  ngOnInit(): void {
  }

  addStudent() {

    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    studentToCreate.notes = " ";
    this.studentService.createStudent(studentToCreate).subscribe();

    // this.studentService.addStudent(createdStudent);
    this.studentForm.reset();
  }

}
