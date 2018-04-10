import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/data.service';
import { IDinosaur } from '../../shared/dinosaur.model';
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

  constructor(private data: DataService) {
    this.dinoList$ = this.data.dinos$.pipe(
      tap(
        res => {
          if (res) {
            this.loading = false;
          }
        },
        err => {
          this.loading = false;
          this.error = true;
        }
      )
    );
  }

  ngOnInit() {
  }

}
