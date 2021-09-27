import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-student-add-form',
  templateUrl: './student-add-form.component.html',
  styleUrls: ['./student-add-form.component.css']
})
export class StudentAddFormComponent implements OnInit {

  regno: string = '';
  name: string = '';
  dob: string = '';
  fname: string = '';
  mname: string = '';
  phone: string = '';
  mail: string = '';

  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.regno || !this.name || !this.dob || !this.fname || !this.mname || !this.phone || !this.mail) {
      alert('Please fill all the fields!');
      return;
    }

    const student: Student = new Student(this.regno, this.name, this.dob, this.fname, this.mname, this.phone, this.mail);
    this.studentService.saveStudent(student).subscribe(res => {
      if (res.success) {
        this.regno = this.name = this.dob = this.fname = this.mname = this.phone = this.mail = '';
        alert('Student saved successfully!');
      } 
    });
    
  }

}
