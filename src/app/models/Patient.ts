import {Room} from "./Room";
import {Reservation} from "./Reservation";

export class Patient {
  id!: number;
  name!: string;
  surname!: number;
  phone!: string;
  pesel!: string;
  reservation!: Reservation[];
}
