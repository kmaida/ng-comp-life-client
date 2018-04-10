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
    this.original = Object.freeze(Object.assign({}, this.dino));
  }

  ngDoCheck() {
    if (this.original.favorite !== this.dino.favorite) {
      console.log(this.dino.name, 'favorite changed');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges:', this.original, changes.dino.currentValue);
  }

  favDinosaur() {
    this.favBtnClicked.emit(this.dino.name);
  }

}
