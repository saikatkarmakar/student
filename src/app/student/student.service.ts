import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class Student {
  constructor(
    public id: number,
    public name: string
  ) { }
}

@Injectable()
export class StudentService {

  constructor(private http: Http) { }
  getStudents(): Observable<Student[]> {
    return this.http.get('/assets/data/students.json')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}


