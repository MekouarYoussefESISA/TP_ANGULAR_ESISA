import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-page',
  template: `
  <div class="content">
    <app-ticket-form></app-ticket-form>
    <app-ticket-list></app-ticket-list>
  </div>
  `,
  styles: [`
    .content {
      display: flex;
    }
    app-ticket-form {
      margin-left: 1em;
    }
    app-ticket-list {
      flex: 1;
    }
  `]
})
export class TicketPageComponent { }