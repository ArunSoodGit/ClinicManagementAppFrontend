import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";
import {MedicineService} from "../../services/medicine.service";
import {Medicine} from "../../models/Medicine";

@Component({
  selector: 'app-new-medicine',
  templateUrl: './new-medicine.component.html',
  styleUrls: ['./new-medicine.component.scss']
})
export class NewMedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();


  constructor(private router: Router, private medicineService: MedicineService, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NewMedicineComponent>) {
  }

  ngOnInit(): void {
  }

  onSubmit(medicine:  Medicine): void {
    this.medicineService.addMedicine(medicine).subscribe(
      data => {
        this.router.navigate(['/medicines']);
      });

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
