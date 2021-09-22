import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Doctor} from "../../models/Doctor";
import {DoctorService} from "../../services/doctor.service";
import {Patient} from "../../models/Patient";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-remove-patient',
  templateUrl: './remove-patient.component.html',
  styleUrls: ['./remove-patient.component.scss']
})
export class RemovePatientComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemovePatientComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Patient, private patientService: PatientService) {
  }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.patientService.removePatient(this.data.id).subscribe();
    this.dialogRef.close();
    window.location.reload();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
