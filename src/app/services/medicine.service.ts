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
    return this.httpClient.get<Medicine[]>('https://localhost:444/api/v1/medicines');
  }
  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>('https://localhost:444/api/v1/medicines', medicine, {headers: this.headers});
  }
  deleteMedicine(id: number): Observable<Medicine> {
    const url = `https://localhost:444/api/v1/medicines/${id}`;
    return this.httpClient.delete<Medicine>(url, {headers: this.headers});
  }

}
