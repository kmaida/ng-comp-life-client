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
import { ApiService } from '../../shared/api.service';
import { IDinosaur } from '../../shared/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styles: [`:host ::ng-deep .notes { color: red; }`]
})
export class OnpushComponent implements AfterViewInit, OnDestroy {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]>;
  @ViewChildren('dinoElement') dinoList: QueryList<ElementRef>;
  initDinoElementSub: Subscription;
  scrollId: string;
  loading = true;
  error: boolean;
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
    private api: ApiService
  ) {
    this._subscribeToHashChange();
    this.dinoList$ = api.dinos$.pipe(
      tap(
        (res) => {
          if (res.length) {
            this.loading = false;
          }
        },
        (err) => {
          this.error = true;
          this.loading = false;
        }
      )
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

  onFavEvent(name: string) {
    this.api.favDino$(name).subscribe(
      res => {
        // @TODO: update so that onPush does something here
        console.log(res);
      }
    );
  }

  ngOnDestroy() {
    this.hashSub.unsubscribe();
  }
}
