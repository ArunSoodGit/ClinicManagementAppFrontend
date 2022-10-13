import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medicine} from "../models/Medicine";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private BASE_URL = 'https://localhost:444/api/v1';

  constructor(private httpClient: HttpClient) {}

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(this.BASE_URL + '/medicines');
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(this.BASE_URL + '/medicines', medicine, {headers: this.headers});
  }

  deleteMedicine(id: number): Observable<Medicine> {
    const url = this.BASE_URL + '/medicines/${id}';
    return this.httpClient.delete<Medicine>(url, {headers: this.headers});
  }

}
