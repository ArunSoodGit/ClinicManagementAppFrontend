import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../models/Reservation";
import {Prescription} from "../../models/Prescription";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../services/reservation.service";
import {PrescriptionService} from "../../services/prescription.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {Patient} from "../../models/Patient";

@Component({
  selector: 'app-patient-personal-data',
  templateUrl: './patient-personal-data.component.html',
  styleUrls: ['./patient-personal-data.component.scss']
})
export class PatientPersonalDataComponent implements OnInit {
  @Input() patient!: Patient;

  constructor(private router: Router, private route: ActivatedRoute,
              private reservationService: ReservationService,
              private prescriptionService: PrescriptionService,
              public datePipe: DatePipe,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  showPatient(): void {
    this.router.navigate(['/patients', this.patient.id]);

  }
}
