import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {


    if (sessionStorage.getItem('username') && sessionStorage.getItem('basically')) {
      req = req.clone({
        setHeaders: {
          Authorization: JSON.parse(sessionStorage.getItem('basically') || '')
        }
      });
    }

    return next.handle(req);

  }
}
