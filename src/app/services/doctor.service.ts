import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Doctor} from "../models/Doctor";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private BASE_URL = 'https://localhost:444/api/v1/doctors';

  constructor(private httpClient: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.BASE_URL);
  }

  getDoctorById(doctorId: number): Observable<Doctor> {
    const url = this.BASE_URL + `/${doctorId}`;
    return this.httpClient.get<Doctor>(url);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>(this.BASE_URL, doctor, {headers: this.headers});
  }

  deleteDoctor(id: number): Observable<Doctor> {
    const url = this.BASE_URL + `${id}`;
    return this.httpClient.delete<Doctor>(url, {headers: this.headers});
  }

}
