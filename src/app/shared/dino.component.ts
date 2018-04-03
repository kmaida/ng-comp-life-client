import { Component, OnInit, Input } from '@angular/core';
import { IDinosaur } from './dinosaur.model';

@Component({
  selector: 'app-dino',
  template: `
    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">{{ dino.name }}</h5>
        <div class="card-text">
          <ul class="list-unstyled">
            <li><em>{{ dino.pronunciation }}</em> / "{{ dino.meaningOfName }}"</li>
            <li><strong>Lived:</strong> {{ dino.period }} ({{ dino.mya }} million years ago)</li>
            <li><strong>Diet:</strong> {{ dino.diet }}</li>
            <li><strong>Length:</strong> {{ dino.length }}</li>
          </ul>
        </div>
        <p class="card-text lead" [innerHTML]="dino.info"></p>
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
