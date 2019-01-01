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
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../../shared/data.service';
import { IDinosaur } from '../../shared/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styles: []
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

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    this.subscribeToHashChange();
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

  // Without trackBy, component is re-initialized
  // every time the reference changes
  trackByFn(index, item) {
    return index;
  }

  private subscribeToHashChange(): void {
    this.hashSub = this.route.fragment.subscribe(
      fragment => this.scrollId = fragment
    );
  }

  ngAfterViewInit() {
    this.initDinoElementSub = this.dinoList.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        if (this.scrollId) {
          this.scrollToAnchor(changes);
          this.initDinoElementSub.unsubscribe();
        }
      }
    );
  }

  private scrollToAnchor(queryList: QueryList<ElementRef>): void {
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
