import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Doctor} from "../../models/Doctor";
import {DoctorService} from "../../services/doctor.service";
import {Reservation} from "../../models/Reservation";
import {ReservationService} from "../../services/reservation.service";

@Component({
  selector: 'app-remove-reservation',
  templateUrl: './remove-reservation.component.html',
  styleUrls: ['./remove-reservation.component.scss']
})
export class RemoveReservationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveReservationComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Reservation, private reservationService: ReservationService) {
  }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.reservationService.deleteReservation(this.data.id).subscribe();
    this.dialogRef.close();
    window.location.reload();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
