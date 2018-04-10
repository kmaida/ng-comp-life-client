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

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    for (const propName in changes) {
      if (propName === 'dino') {
        const change = changes[propName];
        const cur = change.currentValue;
        const prev = change.previousValue;
        console.log(cur, prev);
      }
    }
  }

}
