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
export class DinoContentOnpushComponent implements OnChanges, OnInit {
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
    // This happens after the first ngOnChanges
    console.log('ngOnInit');
  }

  private logger(cur, prev): void {
    const msg = str => `%c${str}`;
    const bold = 'font-weight: bold;';
    const red = 'color: red;';
    const blue = 'color: blue;';
    const purple = 'color: DarkViolet;';

    if (!prev) {
      console.log(msg('OnChanges - initial data from Input has loaded!'), red + bold);
    } else {
      if (cur.name !== prev.name) {
        console.log(msg('NAME UPDATED!'), blue + bold);
        console.log(msg(`CURRENT name: "${cur.name}"`), blue);
        console.log(msg(`PREVIOUS name: "${prev.name}"`), blue);
      }
      if (cur.info !== prev.info) {
        console.log(msg('INFO UPDATED!'), purple + bold);
        console.log(msg(`CURRENT info: "${cur.info}"`), purple);
        console.log(msg(`PREVIOUS info: "${prev.info}"`), purple);
      }
    }
  }

}
