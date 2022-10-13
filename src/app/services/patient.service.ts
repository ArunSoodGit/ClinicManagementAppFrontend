import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "../models/Doctor";
import {Patient} from "../models/Patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>('https://localhost:444/api/v1/patients');
  }
  getPatientById(patientId: number): Observable<Patient> {
    const url = `https://localhost:444/api/patients/${patientId}`;
    return this.httpClient.get<Patient>(url);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>('https://localhost:444/api/v1/patients', patient, {headers: this.headers});
  }
  updatePatient(patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>('https://localhost:444/api/v1/patients', patient, {headers: this.headers})
      ;
  }
  removePatient(patientId: number): Observable<Patient> {
    const url = `https://localhost:444/api/v1/patients/${patientId}`;
    return this.httpClient.delete<Patient>(url, {headers: this.headers});
  }

}
