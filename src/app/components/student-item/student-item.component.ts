import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  stringify = JSON.stringify;

  @Input() student: Student = new Student('','','','','','','');

  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    
  }

  downloadRC() {
    alert('working!');
    this.studentService.getReportCard(this.student).subscribe(res => {
      const data = URL.createObjectURL(new Blob([res], {type: "application/pdf"}));
      const link = document.createElement('a');
      link.href = data;
      link.download = `reportcard-${this.student.registerNo}-${new Date()}.pdf`;
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(data);
      }, 1000);
    })
  }

  sendMail() {
    alert('started');
    this.studentService.mailReportcard(this.student).subscribe(res => {
      console.log(res);
      if (res.success) {
        alert("Mail sent successfully!")
      } else {
        alert(res.message);
      }
    })
  }

}
