import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../models/Reservation";
import {Prescription} from "../models/Prescription";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../reservation.service";
import {PrescriptionService} from "../prescription.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-patient-personal-data',
  templateUrl: './patient-personal-data.component.html',
  styleUrls: ['./patient-personal-data.component.scss']
})
export class PatientPersonalDataComponent implements OnInit {
  @Input() reservation!: Reservation;

  visitDescription!: string;
  prescription!: Prescription;

  constructor(private router: Router, private route: ActivatedRoute,
              private reservationService: ReservationService,
              private prescriptionService: PrescriptionService,
              public datePipe: DatePipe,
              private dialog: MatDialog) {
    this.getReservation();
  }

  ngOnInit(): void {
  }

  showPatient(): void {
    this.router.navigate(['/patients', this.reservation.patient.id]);

  }

  getReservation(): void {
    this.reservationService.getReservationById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(reservation => {
        this.reservation = reservation;
        this.visitDescription = reservation.description;
        this.prescriptionService.getPrescriptionForReservation(reservation).subscribe(prescription => {
          this.prescription = prescription;
          console.log(this.prescription);
        });
      })
  }
}
