import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation} from "../models/Reservation";
import {Observable} from "rxjs";
import {Prescription} from "../models/Prescription";
import {Medicine} from "../models/Medicine";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }


  getMedicinesForPrescription(prescription:Prescription): Observable<Medicine[]> {
    return this.httpClient.post<Medicine[]>('https://localhost:444/api/prescriptions/medicines', prescription, {headers: this.headers});

  }
}
