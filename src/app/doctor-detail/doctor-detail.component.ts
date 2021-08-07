import {Component, OnInit} from '@angular/core';
import {Doctor} from "../models/Doctor";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DoctorService} from "../doctor.service";
import {Reservation} from "../models/Reservation";
import {ReservationService} from "../reservation.service";
import {Visit} from "../models/Visit";

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

  doctor!: Doctor;
  reservations!: Reservation[];
  visit!: Visit;

  constructor(private router: Router, private route: ActivatedRoute,
              private doctorService: DoctorService,
              private reservationService: ReservationService,
              private dialog: MatDialog) {
    this.getDoctor();
  }

  ngOnInit(): void {
  }

  getDoctor(): void {

    this.doctorService.getDoctorById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(doctor => {
        this.doctor = doctor;
        this.reservationService.getReservationsForDoctor(doctor).subscribe((reservation: Reservation[]) => {
          this.reservations = reservation;
          console.log(reservation);
        });
      });

  }

  showVisit(reservation: Reservation): void {

      this.router.navigate(['/reservations', reservation.id]);

  }
}
