import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation} from "../models/Reservation";
import {Observable} from "rxjs";
import {Prescription} from "../models/Prescription";
import {Medicine} from "../models/Medicine";
import {Doctor} from "../models/Doctor";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>('https://localhost:444/api/medicines');
  }
  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>('https://localhost:444/api/medicines', medicine, {headers: this.headers});
  }
  updateMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.put<Medicine>('https://localhost:444/medicines', medicine, {headers: this.headers})
      ;
  }

}
