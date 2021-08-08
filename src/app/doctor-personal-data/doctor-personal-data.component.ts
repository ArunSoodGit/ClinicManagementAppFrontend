import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../reservation.service";
import {PrescriptionService} from "../prescription.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {Reservation} from "../models/Reservation";
import {Prescription} from "../models/Prescription";

@Component({
  selector: 'app-doctor-personal-data',
  templateUrl: './doctor-personal-data.component.html',
  styleUrls: ['./doctor-personal-data.component.scss']
})
export class DoctorPersonalDataComponent implements OnInit {

  @Input() reservation!: Reservation;

  visitDescription!: string;

  constructor(private router: Router, private route: ActivatedRoute,
              private reservationService: ReservationService,
              private prescriptionService: PrescriptionService,
              public datePipe: DatePipe,
              private dialog: MatDialog) {
    this.getReservation();
  }

  ngOnInit(): void {
  }

  showDoctor(): void {
    this.router.navigate(['/doctors', this.reservation.doctor.id]);

  }

  getReservation(): void {
    this.reservationService.getReservationById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(reservation => {
        this.reservation = reservation;
        this.visitDescription = reservation.description;
      })
  }
}
