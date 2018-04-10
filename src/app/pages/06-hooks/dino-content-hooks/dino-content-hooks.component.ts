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
  previous: IDinosaur;

  constructor() { }

  ngOnInit() {
    this.previous = Object.assign({}, this.dino);
  }

  ngDoCheck() {
    // console.log('DoCheck: something changed somewhere');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('OnChanges:', this.previous, changes.dino.currentValue);
  }

  favDinosaur() {
    this.favBtnClicked.emit(this.dino.name);
  }

}
