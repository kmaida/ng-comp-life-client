import {
  Component,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../core/api.service';
import { IDinosaur } from '../../core/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styles: [`
    :host ::ng-deep .notes { color: red; }
  `]
})
export class FinalComponent implements AfterViewInit, OnDestroy {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]>;
  @ViewChildren('dinoElement') dinoList: QueryList<any>;
  initDinoElementSub: Subscription;
  scrollId: string;
  loading = true;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this._initHashSub();
    this.dinoList$ = api.getDinos$().pipe(
      tap(
        (res) => this.loading = false,
        (err) => {
          this.error = true;
          this.loading = false;
        }
      )
    );
  }

  private _initHashSub() {
    this.hashSub = this.route.fragment.subscribe(
      fragment => {
        if (fragment) {
          this.scrollId = fragment;
          if (this.dinoList && this.dinoList.length) {
            this._scrollToAnchor(this.dinoList);
          }
        }
      }
    );
  }

  ngAfterViewInit() {
    this.initDinoElementSub = this.dinoList.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        if (this.scrollId) {
          this._scrollToAnchor(changes);
          this.initDinoElementSub.unsubscribe();
        }
      }
    );
  }

  private _scrollToAnchor(queryList: QueryList<ElementRef>) {
    const scrollElementRef = queryList.find(
      (el: ElementRef) => el.nativeElement.id === this.scrollId
    );
    const pos = scrollElementRef.nativeElement.offsetTop || document.body.clientTop || 0;
    window.scrollTo(0, pos);
  }

  ngOnDestroy() {
    this.hashSub.unsubscribe();
  }
}
