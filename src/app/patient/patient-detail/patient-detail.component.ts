import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../models/Doctor";
import {Reservation} from "../../models/Reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";
import {ReservationService} from "../../services/reservation.service";
import {MatDialog} from "@angular/material/dialog";
import {Patient} from "../../models/Patient";
import {PatientService} from "../../patient.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {


  patient!: Patient;
  reservations!: Reservation[];

  constructor(private router: Router, private route: ActivatedRoute,
              private patientService: PatientService,
              private reservationService: ReservationService,
              private dialog: MatDialog) {
    this.getPatient();
  }

  ngOnInit(): void {
  }

  getPatient(): void {

    this.patientService.getPatientById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(data => {
        this.patient = data;
        this.reservationService.getReservationsForPatient(data).subscribe((reservation: Reservation[]) => {
          this.reservations = reservation;
          console.log(reservation);
        });
      });

  }

  showVisit(reservation: Reservation): void {

    this.router.navigate(['/reservations', reservation.id]);

  }
}
