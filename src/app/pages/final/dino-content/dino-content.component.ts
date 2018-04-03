import { Component, OnInit, Input } from '@angular/core';
import { IDinosaur } from '../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content',
  templateUrl: 'dino-content.component.html',
  styles: []
})
export class DinoContentComponent implements OnInit {
  @Input() dino: IDinosaur;
  @Input() path: string;
  routerLinkArr: string[];

  constructor() { }

  ngOnInit() {
    this.routerLinkArr = [`/${this.path}`];
  }

}
