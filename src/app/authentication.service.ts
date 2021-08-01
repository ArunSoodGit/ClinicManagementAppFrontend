import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) {  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(username: string, password: string): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<User>('https://localhost:444/validateLogin', {headers}).pipe(
      map(
        userData => {
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basically', authString);
          sessionStorage.setItem('username', username);
          return userData;
        }
      )
    );
  }


  isUserLoggedIn(): any {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut(): any {
    sessionStorage.removeItem('username');
  }
}
