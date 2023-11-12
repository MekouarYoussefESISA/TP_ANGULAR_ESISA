import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { StudentService } from '../services/student/student.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './students/student/student.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketPageComponent } from './tickets/ticket-page.component';
import { StudentPageComponent } from './students/student-page.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    StudentComponent,
    StudentFormComponent,
    StudentListComponent, 
    TicketPageComponent,
    StudentPageComponent,
    StudentDetailComponent// All the components needs to be declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    FormsModule // Import all dependencies
  ],
  providers: [TicketService, StudentService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
