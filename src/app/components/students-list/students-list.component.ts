import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];
  angular = JSON.stringify;

  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }



}
