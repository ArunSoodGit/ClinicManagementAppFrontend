import {Component, Inject, OnInit} from '@angular/core';
import {Patient} from "../../models/Patient";
import {Doctor} from "../../models/Doctor";
import {Reservation} from "../../models/Reservation";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {DoctorService} from "../../services/doctor.service";
import {ReservationService} from "../../services/reservation.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Status} from "../../models/Status";

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent implements OnInit {

  patient = new Patient();
  doctor: Doctor = new Doctor();
  reservation: Reservation = new Reservation();
  doctors!: Doctor[];
  patients!: Patient[];
  reservations!: Reservation[];
  dates: Date[] = [];
  myDate!: Date;

  constructor(private router: Router, private patientService: PatientService,
              private doctorService: DoctorService, private reservationService: ReservationService,
              private snackBar: MatSnackBar, public dialogRef: MatDialogRef<NewReservationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Doctor) {
  }

  ngOnInit(): any {
    this.myDate = new Date();
    this.myDate.setHours(0);
    this.myDate.setMinutes(0);
    this.myDate.setSeconds(0);
    this.myDate.setMilliseconds(0);
    this.patientService.getPatients().subscribe(patient => this.patients = patient);
    this.doctorService.getDoctors().subscribe(doctor => this.doctors = doctor);

  }


  onSubmit(reservation: Reservation): void {
    this.data ? reservation.doctor = this.data : reservation.doctor = this.doctor;
    console.log(reservation.doctor);
    reservation.patient = this.patient;
    reservation.status = Status.PLANING;
    console.log(reservation);
    this.reservationService.addReservation(reservation).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/reservations']);
        window.location.reload();
      });

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }



  onChangeDoctor(doctor: Doctor): void {
    console.log(doctor);

    this.dates = [];
    this.reservationService.getReservationsForDoctor(doctor).subscribe(reservation => {
      this.reservations = reservation;
      this.prepareDate(reservation);
    });

  }

  rangeFilter = (d: Date): boolean => {
    const time = d.getTime();
    return !this.dates.find(x => x.getTime() === time) && time >= (this.myDate.getTime());

  };

  getDatesBetweenDates(startDate: string | number | Date, endDate: number | Date): Date[] {
    const theDate = new Date(startDate);
    while (theDate <= endDate) {
      this.dates.push(new Date(theDate));
      theDate.setDate(theDate.getDate() + 1);
    }
    return this.dates;
  }

  prepareDate(reservations: Reservation[]): void {
    this.dates = [];
    return reservations.forEach(r => {
      if (r !== undefined && r !== null) {
        return this.getDatesBetweenDates(new Date(r.visitDate), new Date(r.visitDate));
      } else {
        this.dates = [];
        return null;
      }
    });

  }
}
