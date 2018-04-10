import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IDinosaur } from './../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-hooks',
  templateUrl: 'dino-content-hooks.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentHooksComponent implements OnInit, OnChanges {
  @Input() dino: IDinosaur;
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

}
