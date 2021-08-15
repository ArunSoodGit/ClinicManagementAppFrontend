import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDoctorDescriptionComponent } from './reservation-doctor-description.component';

describe('ReservationDoctorDescriptionComponent', () => {
  let component: ReservationDoctorDescriptionComponent;
  let fixture: ComponentFixture<ReservationDoctorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDoctorDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDoctorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
