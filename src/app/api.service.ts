import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { IDinosaur } from './dinosaur.model';

@Injectable()
export class ApiService {
  private _API = 'https://dinoapi.kmaida.net/';

  constructor(private http: HttpClient) { }

  getDinos$(): Observable<IDinosaur[]> {
    return this.http.get(`${this._API}dinosaurs`)
      .pipe(
        catchError((err, caught) => this._onError(err, caught))
      );
  }

  private _onError(err: HttpErrorResponse | any, caught) {
    // This function is called with arrow syntax to preserve "this"
    // in case it is needed for error handling in the future
    let errorMsg = 'Error: Unable to complete request.';
    if (err instanceof HttpErrorResponse) {
      errorMsg = err.message;
    }
    return Observable.throw(errorMsg);
  }

}
