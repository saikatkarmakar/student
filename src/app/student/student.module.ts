import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    StudentRoutingModule
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
