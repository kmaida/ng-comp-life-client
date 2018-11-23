import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IDinosaur } from './dinosaur.model';

function freezeArray(array: IDinosaur[]) {
  // Iterate through array and freeze all objects.
  // Note: this is not a deep freeze, as our data
  // currently does not require it.
  array.forEach(Object.freeze);
  return Object.freeze(array);
}

@Injectable()
export class DataService {
  private API = 'http://localhost:3005/api';
  private state: any;
  private state$ = new BehaviorSubject<IDinosaur[]>(null);
  private errorMsg$ = new BehaviorSubject<string>(null);
  dinos$ = this.state$.asObservable();
  errors$ = this.errorMsg$.asObservable();

  constructor(private http: HttpClient) { }

  getDinos$(): Observable<IDinosaur[]> {
    return this.http.get<IDinosaur[]>(`${this.API}/dinosaurs`).pipe(
      tap(
        res => {
          this.state = res;
          this.state$.next([...this.state]);
          this.errorMsg$.next(null);
        }
      ),
      catchError((err, caught) => this.onError(err, caught))
    );
  }

  getSpecialDino$(): Observable<IDinosaur> {
    return this.http.get<IDinosaur>(`${this.API}/special`).pipe(
      catchError((err, caught) => this.onError(err, caught))
    );
  }

  favDino$(name: string): Observable<IDinosaur> {
    // Freeze the array so its objects cannot be mutated
    const state = freezeArray([...this.state]);
    const index = state.findIndex(d => name === d.name);
    const newState = state.map((dino, i) => {
      if (i === index) {
        return Object.assign({}, dino, { favorite: true });
      }
      return dino;
    });
    this.state = newState;
    this.state$.next(this.state);
    this.errorMsg$.next(null);
    // Make optimistic API call
    return this.favDinoPost$(name);
  }

  private favDinoPost$(name: string): Observable<IDinosaur> {
    return this.http.post<IDinosaur>(`${this.API}/fav`, { name }).pipe(
      tap(res => console.log(`%c${name} data was updated on the API!`, 'color: green; font-weight: bold;')),
      catchError((err, caught) => this.onError(err, caught))
    );
  }

  private onError(err: HttpErrorResponse | any, caught) {
    let errorMsg = 'Error: Unable to complete request.';
    if (err instanceof HttpErrorResponse) {
      errorMsg = err.message;
    }
    this.errorMsg$.next(errorMsg);
    this.state$.next(null);
    return throwError(errorMsg);
  }

}
