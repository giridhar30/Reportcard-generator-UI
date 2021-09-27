import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksAddFormComponent } from './components/marks-add-form/marks-add-form.component';
import { StudentAddFormComponent } from './components/student-add-form/student-add-form.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {path: '', component: StudentsListComponent},
  {path: 'addStudent', component: StudentAddFormComponent},
  {path: 'addMarks', component: MarksAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
