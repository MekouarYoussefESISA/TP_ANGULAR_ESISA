import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../models/student';

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
  studentHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  studentHasBeenDeleted: EventEmitter<Student> = new EventEmitter<Student>();

  constructor() {
  }

  ngOnInit() {
  }

  selectStudent() {
    this.studentHasBeenSelected.emit(true);
  }

  deleteStudent() {
    this.studentHasBeenDeleted.emit(this.student);
  }
}
