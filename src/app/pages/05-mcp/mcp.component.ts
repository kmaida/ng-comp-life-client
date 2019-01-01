import {
  Component,
  OnInit,
  ViewChildren,
  AfterViewInit,
  ContentChild,
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
  selector: 'app-mcp',
  templateUrl: './mcp.component.html',
  styles: []
})
export class McpComponent implements OnInit, AfterViewInit, OnDestroy {
  hashSub: Subscription;
  dinoList$: Observable<IDinosaur[]> = this.data.getDinos$().pipe(
    tap(
      res => this.loading = false,
      err => {
        this.error = true;
        this.loading = false;
      }
    )
  );
  @ViewChildren('dinoElement') dinoList: QueryList<ElementRef>;
  initDinoElementSub: Subscription;
  scrollId: string;
  loading = true;
  error: boolean;
  featuredDino: IDinosaur = {
    name: 'Stegosaurus',
    pronunciation: 'STE-go-sore-us',
    meaningOfName: 'roof lizard',
    diet: 'herbivorous',
    length: '6m',
    period: 'Late Jurassic',
    mya: '155-150',
    info: 'Probably the most famous dinosaur ever to hail from Colorado, and the official fossil of the Centennial State, Stegosaurus was named by the American paleontologist Othniel C. Marsh based on bones recovered from Colorado\'s portion of the Morrison Formation.'
  };

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

  ngOnDestroy() {
    this.hashSub.unsubscribe();
  }
}
