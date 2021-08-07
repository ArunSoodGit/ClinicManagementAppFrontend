import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "./models/Reservation";
import {Doctor} from "./models/Doctor";
import {Prescription} from "./models/Prescription";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }


  getPrescriptionsForReservation(reservation:Reservation): Observable<Prescription[]> {
    return this.httpClient.post<Prescription[]>('https://localhost:444/api/prescriptions', reservation, {headers: this.headers});

  }
}
