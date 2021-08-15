import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPersonalDataComponent } from './doctor-personal-data.component';

describe('DoctorPersonalDataComponent', () => {
  let component: DoctorPersonalDataComponent;
  let fixture: ComponentFixture<DoctorPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
