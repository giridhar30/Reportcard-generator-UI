import { Component, OnInit } from '@angular/core';
import { MarkRecord } from 'src/app/model/MarkRecord';
import { MarkRecordService } from 'src/app/service/mark-record.service';

@Component({
  selector: 'app-marks-add-form',
  templateUrl: './marks-add-form.component.html',
  styleUrls: ['./marks-add-form.component.css']
})
export class MarksAddFormComponent implements OnInit {

  constructor(private markRecordServive: MarkRecordService) { }

  regno: string = '';
  term: string = '';
  maths: string = '';
  phy: string = '';
  che: string = '';
  bio: string = '';
  his: string = '';

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.regno || !this.term || !this.maths || !this.phy || !this.che || !this.bio || !this.his) {
      alert('Please fill all the fields!');
      return;
    }

    const term1: number = +this.term;
    const maths1: number = +this.maths;
    const phy1: number = +this.phy;
    const che1: number = +this.che;
    const bio1: number = +this.bio;
    const his1: number = +this.his;

    const markRecord: MarkRecord = new MarkRecord(this.regno, term1, maths1, phy1, che1, bio1, his1);
    this.markRecordServive.saveMarkRecord(markRecord).subscribe(res => {
      if (res.success) {
        this.regno = this.term = this.maths = this.phy = this.che = this.bio = this.his = '';
        alert('Mark Record saved successfully!');
      }
    });
  }

}
