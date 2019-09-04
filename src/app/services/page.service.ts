import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private http: HttpClient) {}

  public pagesBS = new BehaviorSubject<string>(null);

  getPages() {
    return this.http.get('http://localhost:3000/pages').pipe(
      map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }

  getPage(slug) {
    return this.http.get('http://localhost:3000/pages/' + slug).pipe(
      map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }

  postAddPage(value) {
    return this.http.post('http://localhost:3000/pages/add-page', value).pipe(
      map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }

  getEditPage(id) {
    return this.http.get('http://localhost:3000/pages/edit-page/' + id).pipe(
      map(res => res || []),
      catchError(error => throwError(error.message || error))
    );
  }

  postEditPage(value) {
    return this.http
      .post('http://localhost:3000/pages/edit-page/' + value.id, value)
      .pipe(
        map(res => res || []),
        catchError(error => throwError(error.message || error))
      );
  }
}
