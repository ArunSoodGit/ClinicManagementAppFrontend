import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Doctor} from "../../models/Doctor";
import {DoctorService} from "../../services/doctor.service";
import {Medicine} from "../../models/Medicine";
import {MedicineService} from "../../services/medicine.service";

@Component({
  selector: 'app-remove-medicine',
  templateUrl: './remove-medicine.component.html',
  styleUrls: ['./remove-medicine.component.scss']
})
export class RemoveMedicineComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveMedicineComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Medicine, private medicineService: MedicineService) {
  }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.medicineService.deleteMedicine(this.data.id).subscribe();
    this.dialogRef.close();
    window.location.reload();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
