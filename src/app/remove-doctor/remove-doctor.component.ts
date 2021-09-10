import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../models/Doctor";

@Component({
  selector: 'app-remove-doctor',
  templateUrl: './remove-doctor.component.html',
  styleUrls: ['./remove-doctor.component.scss']
})
export class RemoveDoctorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveDoctorComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Doctor, private doctorService: DoctorService) {
  }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.doctorService.deleteDoctor(this.data.id).subscribe();
    this.dialogRef.close();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
