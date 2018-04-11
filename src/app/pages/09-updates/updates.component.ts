import {
  Component,
  OnInit,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
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
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styles: [`:host ::ng-deep .highlight { background: #ffff67; padding: .4rem; }`]
})
export class UpdatesComponent implements OnInit, AfterViewInit, OnDestroy {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]>;
  errorList$: Observable<string>;
  @ViewChildren('dinoElement') dinoList: QueryList<ElementRef>;
  initDinoElementSub: Subscription;
  scrollId: string;
  loading = true;
  error: boolean;
  favSub: Subscription;
  featuredDino: IDinosaur = {
    name: 'Elasmosaurus',
    pronunciation: 'ee-LAZ-mo-sore-us',
    meaningOfName: 'thin plate lizard',
    diet: 'carnivorous',
    length: '14m',
    period: 'Late Cretaceous',
    mya: '80.5',
    info: 'Elasmosaurus was an aquatic reptile with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck.'
  };

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    this._subscribeToHashChange();
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

  private _subscribeToHashChange(): void {
    this.hashSub = this.route.fragment.subscribe(
      fragment => {
        this.scrollId = fragment;
        if (this.dinoList && this.dinoList.length) {
          this._scrollToAnchor(this.dinoList);
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

  private _scrollToAnchor(queryList: QueryList<ElementRef>): void {
    const scrollElementRef = queryList.find(
      (el: ElementRef) => el && el.nativeElement ? el.nativeElement.id === this.scrollId : false
    );
    if (scrollElementRef) {
      const pos = scrollElementRef.nativeElement.offsetTop;
      window.scrollTo(0, pos);
    }
  }

  onFavEvent(name: string): void {
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
