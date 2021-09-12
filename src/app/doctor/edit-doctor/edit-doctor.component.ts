import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DoctorService} from "../../services/doctor.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Doctor} from "../../models/Doctor";

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent {
  specializations: string[] = ['Pediatra', 'Laryngolog', 'Onkolog', 'Ortopeda', 'Okulista', 'Urolog'];
  rooms: string[] = ['1a', '1b', '2', '3', '4a', '4b'];

  constructor(private router: Router, private doctorService: DoctorService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<EditDoctorComponent>,
              @Inject(MAT_DIALOG_DATA) public doctor: Doctor) {
  }

  onSubmit(doctor: Doctor): void {
    console.log(doctor);
    this.doctorService.addDoctor(doctor).subscribe(
      data => {
        console.log(data);
        window.location.reload();
        this.router.navigate(['/doctors']);
      }
    );
    this.dialogRef.close();
    this.snackBar.open('Edytowanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
