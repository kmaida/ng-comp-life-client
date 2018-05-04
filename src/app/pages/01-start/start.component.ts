import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Observable, Subscription } from 'rxjs';
import { IDinosaur } from './../../shared/dinosaur.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: []
})
export class StartComponent implements OnInit, OnDestroy {
  dinoListSub: Subscription;
  dinoList: IDinosaur[];
  loading = true;
  error: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dinoListSub = this.data.getDinos$().subscribe(
      res => {
        this.dinoList = res;
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnDestroy() {
    this.dinoListSub.unsubscribe();
  }

}
