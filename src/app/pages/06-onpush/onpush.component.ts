import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../shared/data.service';
import { IDinosaur } from '../../shared/dinosaur.model';
import { tap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

class DinoForm {
  constructor(
    name?: string,
    info?: string
  ) {}
}

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styles: [`
    :host ::ng-deep .notes { color: red; }
    :host ::ng-deep .highlight { background: #ffff67; }
  `]
})
export class OnpushComponent implements OnInit, OnDestroy {
  dino: IDinosaur;
  formData;
  dinoSub: Subscription;
  loading = true;
  error: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dinoSub = this.data.getSpecialDino$().subscribe(
      dino => {
        this.dino = dino;
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    );
    this.resetForm();
  }

  submitForm() {
    // Update properties of this.dino
    if (this.formData.name) {
      this.dino.name = this.formData.name;
    }
    if (this.formData.info) {
      this.dino.info = this.formData.info;
    }
    this.resetForm();
  }

  resetForm() {
    this.formData = new DinoForm();
  }

  ngOnDestroy() {
    this.dinoSub.unsubscribe();
  }
}
