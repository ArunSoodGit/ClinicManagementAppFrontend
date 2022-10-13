import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/Reservation";
import {Doctor} from "../models/Doctor";
import {Patient} from "../models/Patient";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private BASE_URL = 'https://localhost:444/api/v1';

  constructor(private httpClient: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.BASE_URL + '/reservations');
  }

  getReservationsForDoctor(doctor: Doctor): Observable<Reservation[]> {
    return this.httpClient.post<Reservation[]>(this.BASE_URL + '/doctors/reservations', doctor, {headers: this.headers});
  }

  getReservationsForPatient(patient: Patient): Observable<Reservation[]> {
    return this.httpClient.post<Reservation[]>(this.BASE_URL + '/patients/reservations', patient, {headers: this.headers});
  }

  addReservation(Reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.BASE_URL + '/reservations', Reservation, {headers: this.headers});
  }

  getReservationById(id: number): Observable<Reservation> {
    const url = this.BASE_URL + '/reservations/${id}';
    return this.httpClient.get<Reservation>(url);
  }

  deleteReservation(id: number): Observable<Reservation> {
    const url = `https://localhost:444/api/v1/reservations/${id}`;
    return this.httpClient.delete<Reservation>(url, {headers: this.headers});
  }
}
