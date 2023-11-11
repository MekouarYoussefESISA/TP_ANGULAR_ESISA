import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/models/student';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';
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
  public tickets$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  
  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get<{students: Student[]}>(this.url).pipe(
        map(response => response.students)
    );
}

}
