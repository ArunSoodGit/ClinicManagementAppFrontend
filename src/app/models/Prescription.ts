import {PrescriptionMedicine} from "./PrescriptionMedicine";

export class Prescription {
  id!: number;
  description!: string;
  date!: Date;
  prescriptionMedicine!: PrescriptionMedicine[];
}
