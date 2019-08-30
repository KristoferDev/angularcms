import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';

import { Injectable } from '@angular/core';
/*{providedIn: 'root'}*/
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post('http://localhost:3000/users/register', user)
    .pipe(
      map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }

   login(user) {
    return this.http.post('http://localhost:3000/users/login', user)
    .pipe(
      map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }
}
