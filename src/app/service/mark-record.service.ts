import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarkRecord } from '../model/MarkRecord';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarkRecordService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://127.0.0.1:8080/marks/create';

  saveMarkRecord(markRecord: MarkRecord): Observable<any> {
    return this.http.post(this.apiUrl, markRecord, httpOptions);
  }

}
