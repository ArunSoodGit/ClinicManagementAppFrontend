import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Doctor} from "../../models/Doctor";
import {Patient} from "../../models/Patient";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent {

  constructor(private router: Router, private patientService: PatientService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<EditPatientComponent>,
              @Inject(MAT_DIALOG_DATA) public patient: Patient) {
  }

  onSubmit(patient: Patient): void {
    console.log(patient);
    this.patientService.addPatient(patient).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/patients']);
      }
    );
    this.dialogRef.close();
    this.snackBar.open('Edytowanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
