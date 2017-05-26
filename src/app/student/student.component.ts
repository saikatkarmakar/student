import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router  
  ) { }
  students: Student[];  
  student: Student;

  ngOnInit() {
    console.log(this.student);
    this.studentService
      .getStudents()
      .subscribe(
        students => this.students = students,
        err => {
          console.log(err);
        }
      );
  }

  saveStudent() {
    console.log(this.student);
  }

  showDetails(student) {
    this.router.navigate(['/student', student.id]);
  }

}
