import {Component, OnInit} from '@angular/core';
import {Doctor} from "../models/Doctor";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DoctorService} from "../services/doctor.service";
import {Room} from "../models/Room";
import {Specialization} from "../models/Specialization";

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss']
})
export class NewDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  room: Room = new Room();
  specialization: Specialization = new Specialization();
  specializations: string[] = ['Pediatra', 'Laryngolog', 'Onkolog', 'Ortopeda', 'Okulista', 'Urolog'];

  constructor(private router: Router, private doctorService: DoctorService, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NewDoctorComponent>) {
  }

  ngOnInit(): void {
  }

  onSubmit(doctor: Doctor): void {
    // this.doctor.imagePath = 'https://raw.githubusercontent.com/ArunSoodGit/rent-car/master/src/assets/img/'
    //   + this.doctor.carMarkModel.model.toLowerCase() + '.png';
    doctor.specialization = this.specialization;
    doctor.room = this.room;
    console.log(doctor);

    this.doctorService.addDoctor(doctor).subscribe(
      data => {
        this.router.navigate(['/doctors']);
        window.location.reload();
      });

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
