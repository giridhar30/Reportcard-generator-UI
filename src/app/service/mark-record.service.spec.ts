import { TestBed } from '@angular/core/testing';

import { MarkRecordService } from './mark-record.service';

describe('MarkRecordService', () => {
  let service: MarkRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
