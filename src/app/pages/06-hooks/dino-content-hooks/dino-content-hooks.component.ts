import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';
import { IDinosaur } from './../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-hooks',
  templateUrl: 'dino-content-hooks.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentHooksComponent implements OnInit, OnChanges, DoCheck {
  @Input() dino: IDinosaur;
  @Input() showFavBtn: boolean;
  @Output() favBtnClicked = new EventEmitter<string>();
  original: IDinosaur;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    // if (this.original.favorite !== this.dino.favorite) {
    //   console.log(this.dino.name, 'favorite changed');
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    for (const propName in changes) {
      if (propName === 'dino') {
        const change = changes[propName];
        const cur = change.currentValue;
        const prev = change.previousValue;
        // console.log(cur, prev);
      }
    }
  }

  favDinosaur() {
    this.favBtnClicked.emit(this.dino.name);
  }

}
