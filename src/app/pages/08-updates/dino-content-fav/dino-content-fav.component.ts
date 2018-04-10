import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IDinosaur } from './../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-fav',
  templateUrl: 'dino-content-fav.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentFavComponent implements OnInit, OnChanges {
  @Input() dino: IDinosaur;
  @Input() showFavBtn: boolean;
  @Output() favBtnClicked = new EventEmitter<string>();
  original: IDinosaur;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.original) {
      console.log('set original');
      this.original = Object.freeze(Object.assign({}, this.dino));
    }
    console.log('ngOnChanges', this.original, this.dino);
    if (this.original.favorite !== this.dino.favorite) {
      console.log(this.dino.name, 'fav updated');
    }
    // for (const propName in changes) {
    //   if (propName === 'dino') {
    //     const change = changes[propName];
    //     const cur = change.currentValue;
    //     const prev = change.previousValue;
    //     // console.log(cur, prev);
    //   }
    // }
  }

  favDinosaur() {
    this.favBtnClicked.emit(this.dino.name);
  }

}
