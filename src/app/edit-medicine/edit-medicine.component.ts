import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Medicine} from "../models/Medicine";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MedicineService} from "../services/medicine.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss']
})
export class EditMedicineComponent  {


  constructor(private router: Router, private medicineService: MedicineService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<EditMedicineComponent>,
              @Inject(MAT_DIALOG_DATA) public medicine: Medicine) {
  }


  onSubmit(medicine: Medicine): void {
    console.log(medicine);
    this.medicineService.addMedicine(medicine).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/medicines']);
      }
    );
    this.dialogRef.close();
    this.snackBar.open('Edytowanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
