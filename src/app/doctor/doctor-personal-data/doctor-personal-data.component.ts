import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Doctor} from "../../models/Doctor";

@Component({
  selector: 'app-doctor-personal-data',
  templateUrl: './doctor-personal-data.component.html',
  styleUrls: ['./doctor-personal-data.component.scss']
})
export class DoctorPersonalDataComponent implements OnInit {

  @Input() doctor!: Doctor;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  showDoctor(): void {
    this.router.navigate(['/doctors', this.doctor.id]);
  }
}
