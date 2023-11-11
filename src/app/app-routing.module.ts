import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
// import { TicketListComponent } from './tickets';
import { TicketPageComponent } from './tickets/ticket-page.component';
import { StudentListComponent } from './students';

const routes: Routes = [
  { path: 'tickets', component: TicketPageComponent },
  { path: 'students', component: StudentListComponent },
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
