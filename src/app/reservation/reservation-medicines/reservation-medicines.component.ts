import {Component, Input, OnInit} from '@angular/core';
import {Prescription} from "../../models/Prescription";
import {Medicine} from "../../models/Medicine";
import {MedicineService} from "../../services/medicine.service";

@Component({
  selector: 'app-reservation-medicines',
  templateUrl: './reservation-medicines.component.html',
  styleUrls: ['./reservation-medicines.component.scss']
})
export class ReservationMedicinesComponent implements OnInit {

  @Input()
  medicinesList!: Medicine[];

  medicines!: Medicine[];

  constructor(private medicineService: MedicineService) {
  }

  ngOnInit(): void {
    this.medicines = this.medicinesList;
    console.log(this.medicines);
  }

  showMedicine(medicine: Medicine): void {

  }

}
