import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-reservation-doctor-description',
  templateUrl: './reservation-doctor-description.component.html',
  styleUrls: ['./reservation-doctor-description.component.scss']
})
export class ReservationDoctorDescriptionComponent implements OnInit {
  @Input() description!: string;
  @Output() descriptionChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }

  test() {
     this.descriptionChange.emit(this.description);
  }
}
