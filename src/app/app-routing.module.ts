import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";

const routes: Routes = [
  { path: 'cours', component: CourseComponent },
  { path: 'cours/:yob', component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
