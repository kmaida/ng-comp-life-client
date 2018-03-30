import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IDinosaur } from './../../core/dinosaur.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnDestroy {
  dinoListSub: Subscription;
  dinoList: IDinosaur[];
  loading = true;
  error: boolean;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dinoListSub = this.api.getLocalDinos$().subscribe(
      (res) => {
        this.dinoList = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnDestroy() {
    this.dinoListSub.unsubscribe();
  }

}
