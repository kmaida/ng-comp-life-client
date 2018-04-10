import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IDinosaur } from './../dinosaur.model';

@Component({
  selector: 'app-dino-content-onpush',
  templateUrl: 'dino-content-onpush.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentOnpushComponent implements OnInit, OnChanges {
  @Input() dino: IDinosaur;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'dino') {
        const change = changes[propName];
        const cur = change.currentValue;
        const prev = change.previousValue;
        this.logger(cur, prev);
      }
    }
  }

  logger(cur, prev) {
    if (!prev) {
      console.log('OnChanges - initial data from Input has loaded!');
    } else {
      if (cur.name !== prev.name) {
        console.log('NAME UPDATED');
        console.log(`CURRENT name: "${cur.name}"`);
        console.log(`PREVIOUS name: "${prev.name}"`);
      }
      if (cur.info !== prev.info) {
        console.log('INFO UPDATED');
        console.log(`CURRENT info: "${cur.info}"`);
        console.log(`PREVIOUS info: "${prev.info}"`);
      }
    }
  }

}
