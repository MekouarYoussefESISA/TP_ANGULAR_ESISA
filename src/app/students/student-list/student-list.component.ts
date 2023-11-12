import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';
import { Student } from '../../../models/student';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{

  public studentList: Student[] = [];
  
  constructor(public studentService: StudentService) {
    this.studentService.students$.subscribe((students) => this.studentList = students);

    console.log('studentList:', this.studentList);
    
  }

  ngOnInit(): void {
  }

  studentHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student);
  }
}
