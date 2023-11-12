import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
// import { TicketListComponent } from './tickets';
import { TicketPageComponent } from './tickets/ticket-page.component';
// import { StudentListComponent } from './students';
import { StudentPageComponent } from './students/student-page.component';

const routes: Routes = [
  { path: 'tickets', component: TicketPageComponent },
  { path: 'students', component: StudentPageComponent },
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
