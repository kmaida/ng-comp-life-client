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
  styles: [`
    :host ::ng-deep .notes { color: red; }
    :host ::ng-deep .highlight { background: #ffff67; }
  `]
})
export class HooksComponent implements OnInit, OnDestroy {
  dino$: Observable<IDinosaur>;
  loading = true;
  error: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dino$ = this.data.getSpecialDino$().pipe(
      tap(
        dino => this.loading = false,
        err => {
          this.loading = false;
          this.error = true;
        }
      )
    );
  }

  ngOnDestroy() {
  }
}
