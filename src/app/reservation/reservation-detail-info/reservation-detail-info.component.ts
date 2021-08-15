import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../models/Reservation";

@Component({
  selector: 'app-reservation-detail-info',
  templateUrl: './reservation-detail-info.component.html',
  styleUrls: ['./reservation-detail-info.component.scss']
})
export class ReservationDetailInfoComponent implements OnInit {
  @Input() reservation!: Reservation;

  visitDate: string = "Data wizyty:";
  visitStatus: string = "Status wizyty:";

  constructor() {
  }

  ngOnInit(): void {
  }

}
