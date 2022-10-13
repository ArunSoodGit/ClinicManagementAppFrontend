import {Medicine} from "./Medicine";

export class Prescription {
  id!: number;
  description!: string;
  date!: Date;
  medicines!: Medicine[];
}
