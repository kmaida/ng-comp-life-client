import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  DoCheck,
  ChangeDetectorRef
} from '@angular/core';
import { IDinosaur } from './../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content-docheck',
  templateUrl: 'dino-content-docheck.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinoContentDocheckComponent implements OnInit, OnChanges, DoCheck {
  @Input() dino: IDinosaur;
  info: string;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges() {
    console.log('ngOnChanges');
    this.info = this.dino.info;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    // Read https://angular.io/guide/lifecycle-hooks#docheck
    // and http://bit.ly/angularindepth-docheck
    console.log('%cDoCheck', 'color: grey');
    if (this.info !== this.dino.info) {
      this.cd.markForCheck();
    }
  }

}
