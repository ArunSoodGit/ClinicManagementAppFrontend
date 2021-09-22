import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../models/Reservation";
import {Status} from "../../models/Status";


@Component({
  selector: 'app-reservation-doctor-description',
  templateUrl: './reservation-doctor-description.component.html',
  styleUrls: ['./reservation-doctor-description.component.scss']
})
export class ReservationDoctorDescriptionComponent implements OnInit {
  @Input() description!: string;
  @Input() reservation!: Reservation;
  @Output() descriptionChange = new EventEmitter<string>();

  disable: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.reservation.status == Status.FINISHED) {
      this.disable = true;
    }
  }

  test() {
    this.descriptionChange.emit(this.description);
  }
}
