import { Component } from '@angular/core';

@Component({
  selector: 'app-student-page',
  template: `
  <div class="content">
    <app-student-form></app-student-form>
    <app-student-list></app-student-list>
  </div>
  `,
  styles: [`
    .content {
      display: flex;
    }
    app-student-form {
      margin-left: 1em;
    }
    app-student-list {
      flex: 1;
    }
  `]
})
export class StudentPageComponent { }