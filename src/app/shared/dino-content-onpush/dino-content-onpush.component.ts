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
import { IDinosaur } from './../dinosaur.model';

@Component({
  selector: 'app-dino-content-onpush',
  templateUrl: 'dino-content-onpush.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentOnpushComponent implements OnInit, OnChanges, DoCheck {
  @Input() dino: IDinosaur;
  @Input() showFavBtn: boolean;
  @Output() favBtnClicked = new EventEmitter<string>();
  previous;

  constructor() { }

  ngOnInit() {
    this.previous = Object.assign({}, this.dino);
  }

  ngDoCheck() {
    // console.log('DoCheck: something changed somewhere');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges:', changes.dino.previousValue, changes.dino.currentValue);
  }

  favDinosaur() {
    this.favBtnClicked.emit(this.dino.name);
  }

}
