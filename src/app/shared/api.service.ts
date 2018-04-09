import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { IDinosaur } from './dinosaur.model';

@Injectable()
export class ApiService {
  private _API = 'http://localhost:3005/api';
  private _dinoList: any;
  dinos$ = new BehaviorSubject<IDinosaur[]>(this._dinoList);

  constructor(private http: HttpClient) { }

  getDinos$(): Observable<IDinosaur[]> {
    return this.http.get(`${this._API}/delay/dinosaurs`).pipe(
      tap(
        res => {
          this._dinoList = res;
          this.dinos$.next([...this._dinoList]);
        }
      ),
      catchError((err, caught) => this._onError(err, caught))
    );
  }

  favDino$(name: string): Observable<IDinosaur> {
    return this.http.post(`${this._API}/fav`, { name }).pipe(
      tap(
        res => {
          const state = [...this._dinoList];
          const index = state.findIndex(d => name === d.name);
          const newState = state.map((dino, i) => {
            if (i === index) {
              dino.favorite = true;
            }
            return dino;
          });
          this.dinos$.next(newState);
        }
      ),
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
