import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private apiUrl: string = 'http://127.0.0.1:8080/student/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  saveStudent(student: Student): Observable<any> {
    const url = `${this.apiUrl}create`;
    return this.http.post(url, student, httpOptions);
  }

  getReportCard(student: Student) {
    const url = `${this.apiUrl}${student.registerNo}/reportcard`;
    return this.http.get(url, {responseType: 'blob'});
  }

  mailReportcard(student: Student): Observable<any> {
    const url = `${this.apiUrl}${student.registerNo}/reportcard/mail`;
    return this.http.get(url);
  }

}
