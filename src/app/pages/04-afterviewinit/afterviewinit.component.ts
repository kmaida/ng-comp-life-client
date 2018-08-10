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
  selector: 'app-afterviewinit',
  templateUrl: './afterviewinit.component.html',
  styles: []
})
export class AfterviewinitComponent implements OnInit, AfterViewInit, OnDestroy {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]>;
  @ViewChildren('dinoElement') dinoElementsList: QueryList<ElementRef>;
  selectElementRef: ElementRef;
  initDinoElementSub: Subscription;
  selectId: string;
  loading = true;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    this._subscribeToHashChange();
    this.dinoList$ = this.data.getDinos$().pipe(
      tap(
        res => this.loading = false,
        err => {
          this.loading = false;
          this.error = true;
        }
      )
    );
  }

  private _subscribeToHashChange(): void {
    this.hashSub = this.route.fragment.subscribe(
      fragment => {
        this.selectId = fragment;
        if (this.dinoElementsList && this.dinoElementsList.length) {
          this._selectDino(this.dinoElementsList);
        }
      }
    );
  }

  ngAfterViewInit() {
    this.initDinoElementSub = this.dinoElementsList.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        if (this.selectId) {
          this._selectDino(changes, true);
          this.initDinoElementSub.unsubscribe();
        }
      }
    );
  }

  private _selectDino(queryList: QueryList<ElementRef>, afterViewInit): void {
    if (this.selectElementRef) {
      this.selectElementRef.nativeElement.style.backgroundColor = '';
    }
    this.selectElementRef = queryList.find(
      (el: ElementRef) => el && el.nativeElement ? el.nativeElement.id === this.selectId : null
    );
    if (this.selectElementRef) {
      if (afterViewInit) {
        const pos = this.selectElementRef.nativeElement.offsetTop;
        window.scrollTo(0, pos);
        console.log('afterViewInit');
      }
      const nameLength = this.selectElementRef.nativeElement.innerText.length;
      this.selectElementRef.nativeElement.style.backgroundColor = 'red';
    }
  }

  ngOnDestroy() {
    this.hashSub.unsubscribe();
  }
}
