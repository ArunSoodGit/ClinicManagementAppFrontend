import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPersonalDataComponent } from './patient-personal-data.component';

describe('PatientPersonalDataComponent', () => {
  let component: PatientPersonalDataComponent;
  let fixture: ComponentFixture<PatientPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
