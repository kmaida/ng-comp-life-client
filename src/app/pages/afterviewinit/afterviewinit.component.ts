import {
  Component,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../core/api.service';
import { IDinosaur } from '../../core/dinosaur.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-afterviewinit',
  templateUrl: './afterviewinit.component.html',
  styles: []
})
export class AfterviewinitComponent implements AfterViewInit {
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
    this._setInitScrollId();
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

  private _setInitScrollId() {
    this.hashSub = this.route.fragment.subscribe(
      fragment => {
        if (fragment) {
          // Only check this if NgFor hasn't rendered yet.
          // This means it's the initial load of the page.
          // If fragment is found, set scrollId from
          // pageload's hash; initial scroll then
          // takes place on AfterViewInit
          this.scrollId = fragment;
        }
      }
    );
  }

  ngAfterViewInit() {
    this.initDinoElementSub = this.dinoList.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        if (this.scrollId) {
          const scrollElementRef = changes.find(
            (el: ElementRef) => el.nativeElement.id === this.scrollId
          );
          this.scrollToAnchor(scrollElementRef.nativeElement);
        }
        this.initDinoElementSub.unsubscribe();
      }
    );
  }

  scrollToAnchor(element) {
    const pos = element.offsetTop || document.body.clientTop || 0;
    window.scrollTo(0, pos);
  }
}