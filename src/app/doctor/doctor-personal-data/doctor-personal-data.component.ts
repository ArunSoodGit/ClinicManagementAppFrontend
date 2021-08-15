import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../services/reservation.service";
import {PrescriptionService} from "../../services/prescription.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {Reservation} from "../../models/Reservation";
import {Prescription} from "../../models/Prescription";
import {Doctor} from "../../models/Doctor";

@Component({
  selector: 'app-doctor-personal-data',
  templateUrl: './doctor-personal-data.component.html',
  styleUrls: ['./doctor-personal-data.component.scss']
})
export class DoctorPersonalDataComponent implements OnInit {

  @Input() doctor!: Doctor;

  visitDescription!: string;

  constructor(private router: Router, private route: ActivatedRoute,
              private reservationService: ReservationService,
              private prescriptionService: PrescriptionService,
              public datePipe: DatePipe,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  showDoctor(): void {
    this.router.navigate(['/doctors', this.doctor.id]);

  }
}
