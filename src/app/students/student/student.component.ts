import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */

  @Input()
  student: Student;

  @Output()
  studentHasBeenSelected: EventEmitter<Student> = new EventEmitter<Student>();

  @Output()
  studentHasBeenDeleted: EventEmitter<Student> = new EventEmitter<Student>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  selectStudent() {
    this.router.navigate(['/students', this.student.id]);
  }

  deleteStudent() {
    this.studentHasBeenDeleted.emit(this.student);
  }
}
