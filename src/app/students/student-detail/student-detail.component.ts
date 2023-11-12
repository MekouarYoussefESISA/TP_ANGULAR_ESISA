import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  student: Student;
  notes: string;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    const studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(studentId).subscribe(student => {
      this.student = student;
      this.notes = student.notes;
    });
  }

  saveNotes() {
    this.student.notes = this.notes;
    this.studentService.updateStudent(this.student);
  }

}