import {Doctor} from "./Doctor";
import {Patient} from "./Patient";
import {Reservation} from "./Reservation";
import {Prescription} from "./Prescription";

export class Visit {
  id!: number;
  description!: string;
  reservation!: Reservation;
}
