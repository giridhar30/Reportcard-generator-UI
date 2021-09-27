import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.css']
})
export class ActionBtnComponent implements OnInit {

  @Input() text: string = '';
  @Input() student: Student = new Student('','','','','','','');
  
  @Output() rcEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.rcEvent.emit();
  }



}
