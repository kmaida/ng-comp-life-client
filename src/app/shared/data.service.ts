import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { IDinosaur } from './dinosaur.model';

function freezeArray(array: IDinosaur[]) {
  array.forEach(Object.freeze);
  return array;
}

@Injectable()
export class DataService {
  private _API = 'http://localhost:3005/api';
  private _state: any;
  private _state$ = new BehaviorSubject<IDinosaur[]>(this._state);
  dinos$ = this._state$.asObservable();

  constructor(private http: HttpClient) { }

  getDinos$(): Observable<IDinosaur[]> {
    return this.http.get(`${this._API}/delay/dinosaurs`).pipe(
      tap(
        res => {
          this._state = res;
          this._state$.next([...this._state]);
        }
      ),
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
    // Make optimistic API call
    return this.favDinoPost$(name);
  }

  favDinoPost$(name: string): Observable<IDinosaur> {
    return this.http.post(`${this._API}/fav`, { name }).pipe(
      tap(res => console.log('Success! Dino updated on API', res)),
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
