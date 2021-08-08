import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../models/Reservation";

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {
  @Input() reservation!: Reservation;

  visitDate: string = "Data wizyty:";
  visitStatus: string = "Status wizyty:";

  constructor() {
  }

  ngOnInit(): void {
  }

}
