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

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'dino') {
        const change = changes[propName];
        const cur = change.currentValue;
        const prev = change.previousValue;
        const firstChange = change.firstChange;
        if (!firstChange) {
          console.log('CURRENT:', cur);
          console.log('PREVIOUS:', prev);
        }
      }
    }
  }

  ngOnInit() {
  }

  favDinosaur(): void {
    this.favBtnClicked.emit(this.dino.name);
  }

}
