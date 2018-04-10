import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';
import { IDinosaur } from './../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-docheck',
  templateUrl: 'dino-content-docheck.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentDocheckComponent implements OnChanges, OnInit, DoCheck {
  @Input() dino: IDinosaur;

  constructor() { }

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

  ngOnInit() {
    // This happens AFTER ngOnChanges
    console.log('ngOnInit');
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

  ngDoCheck() {
    // I encourage you to read https://angular.io/guide/lifecycle-hooks#docheck
    console.log('DoCheck - something was updated somewhere');
  }

}
