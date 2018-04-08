import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IDinosaur } from '../../../shared/dinosaur.model';
import { ApiService } from '../../../shared/api.service';

@Component({
  selector: 'app-dino-content',
  templateUrl: 'dino-content.component.html',
  styles: []
})
export class DinoContentComponent implements OnInit {
  @Input() dino: IDinosaur;
  @Output() fav = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  favDinosaur() {
    this.fav.emit(this.dino.name);
  }

}
