import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../shared/data.service';
import { IDinosaur } from '../../shared/dinosaur.model';
import { tap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styles: [`:host ::ng-deep .notes { color: green; }`]
})
export class HooksComponent implements OnInit, OnDestroy {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]>;
  errorList$: Observable<string>;
  loading = true;
  error: boolean;
  favSub: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    // Set the store observable.
    // We won't catch errors in the UI anymore because
    // the store itself would never emit an error.
    // To track errors, we should set up another stream.
    this.dinoList$ = this.data.dinos$.pipe(
      tap(dinos => {
        if (dinos) {
          // If there are dinos, done loading
          // No errors
          this.loading = false;
          this.error = false;
        }
      })
    );
    this.errorList$ = this.data.errors$.pipe(
      tap(msg => {
        if (msg) {
          // If there's an error message,
          // done loading, show error
          this.error = true;
          this.loading = false;
        }
      })
    );
  }

  getDino(dinos: IDinosaur[], name: string) {
    return dinos.filter(dino => dino.name === name)[0];
  }

  onFavEvent(name: string) {
    // Run optimistic updates and call the API
    this.favSub = this.data.favDino$(name).subscribe();
  }

  ngOnDestroy() {
    this.hashSub.unsubscribe();
    if (this.favSub) {
      this.favSub.unsubscribe();
    }
  }
}
