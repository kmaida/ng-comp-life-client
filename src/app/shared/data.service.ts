import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { IDinosaur } from './dinosaur.model';

function freezeArray(array: IDinosaur[]) {
  // Iterate through array and freeze all objects
  array.forEach(Object.freeze);
  return Object.freeze(array);
}

@Injectable()
export class DataService {
  private _API = 'http://localhost:3005/api';
  private _state: any;
  private _state$ = new BehaviorSubject<IDinosaur[]>(null);
  private _errorMsg$ = new BehaviorSubject<string>(null);
  dinos$ = this._state$.asObservable();
  errors$ = this._errorMsg$.asObservable();

  constructor(private http: HttpClient) { }

  getDinos$(): Observable<IDinosaur[]> {
    return this.http.get(`${this._API}/dinosaurs`).pipe(
      tap(
        res => {
          this._state = res;
          this._state$.next([...this._state]);
          this._errorMsg$.next(null);
        }
      ),
      catchError((err, caught) => this._onError(err, caught))
    );
  }

  getSpecialDino$(): Observable<IDinosaur> {
    return this.http.get(`${this._API}/special`).pipe(
      catchError((err, caught) => this._onError(err, caught))
    );
  }

  favDino$(name: string): Observable<IDinosaur> {
    // Freeze the array so its objects cannot be mutated
    const state = freezeArray([...this._state]);
    const index = state.findIndex(d => name === d.name);
    const newState = state.map((dino, i) => {
      if (i === index) {
        return Object.assign({}, dino, { favorite: true });
      }
      return dino;
    });
    this._state = newState;
    this._state$.next(this._state);
    this._errorMsg$.next(null);
    // Make optimistic API call
    return this._favDinoPost$(name);
  }

  private _favDinoPost$(name: string): Observable<IDinosaur> {
    return this.http.post(`${this._API}/fav`, { name }).pipe(
      tap(res => console.log('Success! Dino updated on API:', res)),
      catchError((err, caught) => this._onError(err, caught))
    );
  }

  private _onError(err: HttpErrorResponse | any, caught) {
    let errorMsg = 'Error: Unable to complete request.';
    if (err instanceof HttpErrorResponse) {
      errorMsg = err.message;
    }
    this._errorMsg$.next(errorMsg);
    this._state$.next(null);
    return _throw(errorMsg);
  }

}
