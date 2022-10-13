import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../models/Patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private BASE_URL = 'https://localhost:444/api/v1';

  constructor(private httpClient: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.BASE_URL + '/patients');
  }

  getPatientById(patientId: number): Observable<Patient> {
    const url = this.BASE_URL + '/patients/${patientId}';
    return this.httpClient.get<Patient>(url);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(this.BASE_URL + '/patients', patient, {headers: this.headers});
  }

  removePatient(patientId: number): Observable<Patient> {
    const url = this.BASE_URL + '/patients/${patientId}';
    return this.httpClient.delete<Patient>(url, {headers: this.headers});
  }

}
