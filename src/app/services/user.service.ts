import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'https://localhost:444/api/v1';

  constructor(private httpClient: HttpClient) {
  }

  getUserByUserName(userName: string | null): Observable<User> {
    const url = this.BASE_URL + '/users/${userName}';
    return this.httpClient.get<User>(url);
  }

}
