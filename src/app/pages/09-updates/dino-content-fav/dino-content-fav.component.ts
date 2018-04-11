import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IDinosaur } from './../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-fav',
  templateUrl: 'dino-content-fav.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentFavComponent implements OnInit {
  @Input() dino: IDinosaur;
  @Input() showFavBtn: boolean;
  @Output() favBtnClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  favDinosaur(): void {
    this.favBtnClicked.emit(this.dino.name);
  }

}
