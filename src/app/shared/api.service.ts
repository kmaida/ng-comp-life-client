import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { IDinosaur } from './dinosaur.model';

@Injectable()
export class ApiService {
  private _API = 'http://localhost:3005/api';

  constructor(private http: HttpClient) { }

  getDinos$(): Observable<IDinosaur[]> {
    // Simulates live environment by using the delayed endpoint
    return this.http.get(`${this._API}/delay/dinosaurs`).pipe(
      catchError((err, caught) => this._onError(err, caught))
    );
  }

  favDino$(name: string): Observable<IDinosaur> {
    return this.http.post(`${this._API}/fav`, { name }).pipe(
      catchError((err, caught) => this._onError(err, caught))
    );
  }

  private _onError(err: HttpErrorResponse | any, caught) {
    let errorMsg = 'Error: Unable to complete request.';
    if (err instanceof HttpErrorResponse) {
      errorMsg = err.message;
    }
    return _throw(errorMsg);
  }

}
