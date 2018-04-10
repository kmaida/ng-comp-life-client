import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private data: DataService) {
    // This sets up the store universally
    data.getDinos$().subscribe();
  }
}
