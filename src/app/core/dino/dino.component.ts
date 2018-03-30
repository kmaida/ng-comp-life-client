import { Component, OnInit, Input } from '@angular/core';
import { IDinosaur } from '../dinosaur.model';

@Component({
  selector: 'app-dino',
  template: `
    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">{{ dino.name }}</h5>
        <p class="card-text" [innerHTML]="dino.info"></p>
      </div>
    </div>
  `,
  styles: []
})
export class DinoComponent implements OnInit {
  @Input() dino: IDinosaur;

  constructor() { }

  ngOnInit() {
  }

}
