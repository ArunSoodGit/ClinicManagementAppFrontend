import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Patient} from "../../models/Patient";

@Component({
  selector: 'app-patient-personal-data',
  templateUrl: './patient-personal-data.component.html',
  styleUrls: ['./patient-personal-data.component.scss']
})
export class PatientPersonalDataComponent implements OnInit {
  @Input() patient!: Patient;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  showPatient(): void {
    this.router.navigate(['/patients', this.patient.id]);

  }
}
