import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentAddFormComponent } from './components/student-add-form/student-add-form.component';
import { MarksAddFormComponent } from './components/marks-add-form/marks-add-form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { ActionBtnComponent } from './components/action-btn/action-btn.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsListComponent,
    StudentAddFormComponent,
    MarksAddFormComponent,
    StudentItemComponent,
    ActionBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
