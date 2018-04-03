import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="alert alert-danger my-2">
      An error occurred fetching data. Please try again.
    </div>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
