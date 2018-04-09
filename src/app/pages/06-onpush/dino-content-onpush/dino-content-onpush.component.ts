import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { IDinosaur } from '../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-onpush',
  templateUrl: 'dino-content-onpush.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentOnpushComponent implements OnInit {
  @Input() dino: IDinosaur;
  @Output() fav = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  favDinosaur() {
    this.fav.emit(this.dino.name);
    const oldDino = this.dino;
    this.dino = Object.assign({}, oldDino, {favorite: true});
    this.cd.markForCheck();
    // This works locally, but doesn't bubble up to affect the projected content
    // Something is missing in async; maybe DM Minko Gechev in Angular team Slack
  }

}
