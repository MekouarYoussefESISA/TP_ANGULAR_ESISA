import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Student } from 'src/models/student';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../ticket/ticket.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private url = "http://localhost:9428/api/students"
  private studentList: Student[] = [];

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  
  constructor(private http: HttpClient, public ticketService: TicketService) {
  }

  getStudents() : Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(student: Student) {
    // delete all the tickets of the student
    this.ticketService.deleteTicketsByStudentId(student.id);
    return this.http.delete(`${this.url}/${student.id}`)
    .pipe(
      tap (() => {
        this.studentList = this.studentList.filter((s) => s.id !== student.id);
        this.students$.next(this.studentList);
      })
    );
  }


  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student)
    .pipe(
      tap (() => {
        this.studentList.push(student);
        this.students$.next(this.studentList);
      })
    );
  }
  
  getStudent(id: number) {
    return this.http.get<Student>(`${this.url}/${id}`);
  }

  updateStudent(updatedStudent: Student) {
    this.http.put(`${this.url}/${updatedStudent.id}`, updatedStudent).subscribe();
  }
}
