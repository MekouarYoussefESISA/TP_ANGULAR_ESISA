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
    // this.studentService.addStudent(studentToCreate);
    this.studentService.createStudent(studentToCreate).subscribe(
      (response) => {
        console.log('Student created:', response);
      },
      (error) => {
        console.error('Error creating student:', error);
      }
    );
    this.studentForm.reset();
  }

  // addStudent() {

    
  //   const studentToCreate: Student = this.studentForm.getRawValue() as Student;
  //   // get incremental id
    
  //   studentToCreate.id = 0;
  //   studentToCreate.nom = this.studentForm.get('nom').value;
  //   studentToCreate.prenom = this.studentForm.get('prenom').value;
  //   studentToCreate.mail = this.studentForm.get('mail').value;

  //   console.log("added student : ", this.studentForm.getRawValue());
  //   this.studentService.addStudent(studentToCreate);
  // }

}
