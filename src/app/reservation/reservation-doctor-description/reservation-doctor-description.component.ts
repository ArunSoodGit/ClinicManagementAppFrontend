import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../models/Reservation";

@Component({
  selector: 'app-reservation-doctor-description',
  templateUrl: './reservation-doctor-description.component.html',
  styleUrls: ['./reservation-doctor-description.component.scss']
})
export class ReservationDoctorDescriptionComponent implements OnInit {
  @Input() visitDescription!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
