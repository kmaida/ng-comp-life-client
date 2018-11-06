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
  dinoList$: Observable<IDinosaur[]> = this.data.getDinos$().pipe(
    tap(
      res => this.loading = false,
      err => {
        this.loading = false;
        this.error = true;
      }
    )
  );
  @ViewChildren('dinoElement') dinoElementsList: QueryList<ElementRef>;
  initDinoElementSub: Subscription;
  scrollId: string;
  loading = true;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    this.subscribeToHashChange();
  }

  private subscribeToHashChange(): void {
    this.hashSub = this.route.fragment.subscribe(
      fragment => this.scrollId = fragment
    );
  }

  ngAfterViewInit() {
    this.initDinoElementSub = this.dinoElementsList.changes.subscribe(
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
      (el: ElementRef) => el && el.nativeElement ? el.nativeElement.id === this.scrollId : null
    );
    if (scrollElementRef) {
      const pos = scrollElementRef.nativeElement.offsetTop;
      window.scrollTo(0, pos);
    }
  }

  ngOnDestroy() {
    this.hashSub.unsubscribe();
  }
}
