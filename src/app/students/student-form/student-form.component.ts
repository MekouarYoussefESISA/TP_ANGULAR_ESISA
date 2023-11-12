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
      mail: ['']
    });
  }

  ngOnInit(): void {
  }

  addStudent() {
    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    // get incremental id
    studentToCreate.id = this.studentService.getNewId();



    studentToCreate.nom = this.studentForm.get('nom').value;
    studentToCreate.prenom = this.studentForm.get('prenom').value;
    studentToCreate.mail = this.studentForm.get('mail').value;
    this.studentService.addStudent(studentToCreate);
  }

}
