import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../core/api.service';
import { IDinosaur } from '../../core/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-targetlinks',
  templateUrl: './targetlinks.component.html',
  styles: []
})
export class TargetlinksComponent implements OnInit {
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
