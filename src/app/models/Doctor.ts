import {Room} from "./Room";
import {Specialization} from "./Specialization";
import {Reservation} from "./Reservation";

export class Doctor {
  id!: number;
  name!: string;
  surname!: number;
  phone!: string;
  room!: Room;
  specialization!: Specialization;
  reservation!: Reservation[];
}
