import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Observable } from 'rxjs/Observable';
import { IDinosaur } from './../../core/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  dinoList$: Observable<IDinosaur[]>;
  loading = true;
  error: boolean;

  constructor(private api: ApiService) {
    this.dinoList$ = this.api.getLocalDinos$().pipe(
      tap(
        (res) => this.loading = false,
        (err) => {
          this.loading = false;
          this.error = true;
        }
      )
    );
  }

  ngOnInit() {
  }

}
