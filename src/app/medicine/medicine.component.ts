import {Component, Input, OnInit} from '@angular/core';
import {Prescription} from "../models/Prescription";
import {MedicineService} from "../medicine.service";
import {Medicine} from "../models/Medicine";

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  @Input()
  prescription!: Prescription;

  medicines!: Medicine[];

  constructor(private medicineService: MedicineService) {
    this.getMedicinesForPrescription();
  }

  ngOnInit(): void {
  }

  getMedicinesForPrescription(): void {
    // console.log(this.prescription);
    // this.medicineService.getMedicinesForPrescription(this.prescription)
    //   .subscribe(medicines => {
    //     this.medicines = medicines;
    //   })
  }

}
