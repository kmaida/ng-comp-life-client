import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../api.service';
import { IDinosaur } from '../../dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]>;
  @ViewChildren('dinoLoop') dinoList: QueryList<any>;
  initDinoLoopSub: Subscription;
  ngForRendered: boolean;
  scrollId: string;
  loading = true;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this._getHash();
    this.dinoList$ = api.getDinos$()
      .pipe(
        tap(
          (res) => this.loading = false,
          (err) => {
            this.error = true;
            this.loading = false;
          }
        )
      );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initDinoLoopSub = this.dinoList.changes.subscribe(
      (changes: QueryList<any>) => {
        if (this.scrollId) {
          const scrollElement = changes.find(
            (el) => el.nativeElement.id === this.scrollId
          );
          const top = scrollElement.nativeElement.offsetTop || document.body.clientTop || 0;
          window.scrollTo(0, top);
        }
        this.initDinoLoopSub.unsubscribe();
      }
    );
  }

  private _getHash() {
    this.hashSub = this.route.fragment.subscribe(
      fragment => {
        if (fragment && !this.ngForRendered) {
          // Only check this if NgFor hasn't rendered yet.
          // This means it's the initial load of the page.
          // If fragment is found, set scrollId from
          // pageload's hash; scroll takes place on AfterViewInit
          this.scrollId = fragment;
        }
      }
    );
  }

}
