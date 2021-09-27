import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksAddFormComponent } from './marks-add-form.component';

describe('MarksAddFormComponent', () => {
  let component: MarksAddFormComponent;
  let fixture: ComponentFixture<MarksAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
