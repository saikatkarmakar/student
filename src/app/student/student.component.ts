import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  students: Student[];

  ngOnInit() {
    this.studentService
      .getStudents()
      .subscribe(
        students => this.students = students,
        err => {
          console.log(err);
        }
      );
  }

}
