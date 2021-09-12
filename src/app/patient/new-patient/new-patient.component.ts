import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../models/Doctor";
import {Room} from "../../models/Room";
import {Specialization} from "../../models/Specialization";
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";
import {Patient} from "../../models/Patient";
import {PatientService} from "../../patient.service";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  patient: Patient = new Patient();


  constructor(private router: Router, private patientService: PatientService, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NewPatientComponent>) {
  }

  ngOnInit(): void {
  }

  onSubmit(patient: Patient): void {


    this.patientService.addPatient(patient).subscribe(
      data => {
        this.router.navigate(['/patients']);
        window.location.reload();
      });

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
