import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getUserByUserName(userName: string | null): Observable<User> {
    const url = `https://localhost:444/api/v1/users/${userName}`;
    return this.httpClient.get<User>(url);
  }

  save(user: User) {
    this.users.push(user);
  }

  getUser(): User[] {

    return this.users;
  }
}
