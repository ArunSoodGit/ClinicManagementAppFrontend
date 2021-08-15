import {Component, Input, OnInit} from '@angular/core';
import {Prescription} from "../models/Prescription";
import {Medicine} from "../models/Medicine";
import {MedicineService} from "../services/medicine.service";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  @Input()
  prescription!: Prescription;

  medicines!: Medicine[];

  constructor(private medicineService: MedicineService) {
  }

  ngOnInit(): void {
    this.medicines = this.prescription.medicines;
    console.log(this.medicines);
  }

  showMedicine(medicine: Medicine): void {

  }

}
