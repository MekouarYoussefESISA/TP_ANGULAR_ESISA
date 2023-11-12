import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/models/student';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private url = "http://localhost:4200/assets/student.json"
  private studentList: Student[] = [];

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  
  constructor(private http: HttpClient) {
    this.getStudents().subscribe(students => {
      this.studentList = students;
      this.students$.next(this.studentList);
    });
  }

  

  getStudents() {
    return this.http.get<{students: Student[]}>(this.url).pipe(
        map(response => response.students)
    );
  }

  deleteStudent(student: Student) {
    // remove an element from ana array https://www.angularjswiki.com/angular/how-to-remove-an-element-from-array-in-angular-or-typescript/
    this.studentList = this.studentList.filter((s) => s.id !== student.id);
    this.students$.next(this.studentList);
    console.log(this.studentList);
  }

  addStudent(student: Student) {
    this.studentList.push(student);
    this.students$.next(this.studentList);
  }

  getNewId(): number {
    return this.studentList.length + 1;
  }

}
