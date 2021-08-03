import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Doctor} from "./models/Doctor";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>('https://localhost:444/api/doctors');
  }
  getDoctorById(id: number): Observable<Doctor> {
    const url = `https://localhost:444/doctors/${id}`;
    return this.httpClient.get<Doctor>(url);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>('https://localhost:444/api/doctors', doctor, {headers: this.headers});
  }
  updateCar(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>('https://localhost:444/api/doctors', doctor, {headers: this.headers})
      ;
  }
  deleteDoctor(id: number): Observable<Doctor> {
    const url = `https://localhost:444/doctors/${id}`;
    return this.httpClient.delete<Doctor>(url, {headers: this.headers});
  }
  // getRentalByCar(vin: string): Observable<Rental>  {
  //   const url = `https://localhost:444/rentals/${vin}`;
  //   return this.httpClient.get<Rental>(url);
  // }
}
