import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs';
import { IDinosaur } from './../../shared/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styles: []
})
export class AsyncComponent implements OnInit {
  dinoList$: Observable<IDinosaur[]> = this.data.getDinos$().pipe(
    tap(
      res => this.loading = false,
      err => {
        this.loading = false;
        this.error = true;
      }
    )
  );
  loading = true;
  error: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
