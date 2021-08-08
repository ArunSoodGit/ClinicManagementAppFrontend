import {Doctor} from "./Doctor";
import {Patient} from "./Patient";
import {Prescription} from "./Prescription";

export class Reservation {
  id!: number ;
  status!: string;
  visitDate!: Date;
  doctor!: Doctor;
  patient!: Patient;
  description!: string;
  prescription!: Prescription;
}

