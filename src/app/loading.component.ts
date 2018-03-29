import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="text-center my-2">
      <img src="/assets/images/raptor-loading.gif">
    </div>
  `,
  styles: [`
    img {
      display: inline-block;
    }
  `]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
