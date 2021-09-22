import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Role} from "../models/Role";
import {UserService} from "./user.service";
import {Doctor} from "../models/Doctor";

export class User {

  id!: number;
  username!: string;
  status!: string;
  roles!: Role[];
  doctor!: Doctor;

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;
  user!: User;
  role!: Role;
  isAdmin: boolean = false;

  constructor(
    private httpClient: HttpClient, private userService: UserService
  ) {
  }


  authenticate(username: string, password: string): any {

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<User>('https://localhost:444/api/validateLogin', {headers}).pipe(
      map(
        userData => {
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basically', authString);
          sessionStorage.setItem('username', username);
          this.userService.getUserByUserName(username).subscribe(user => {
              this.user = user
              console.log(user.roles[0]);
              if (user.roles[0].name == 'ADMIN') {
                this.isAdmin = true;
                sessionStorage.setItem('isAdmin', 'true');
              }
              sessionStorage.setItem('user', JSON.stringify(user));
            }
          )
          return userData;
        }
      ),
    );

  }


  isUserLoggedIn(): any {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  getUser(): User {
    return this.user;
  }

  isRoleAdmin(): any {

    const isAdmin = sessionStorage.getItem('isAdmin');

    return !(isAdmin === null);
  }

  logOut(): any {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isAdmin');
    return this.httpClient.get('https://localhost:444/logout');
  }
}
