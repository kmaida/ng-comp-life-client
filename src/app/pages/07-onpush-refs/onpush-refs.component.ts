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
  selector: 'app-onpush-refs',
  templateUrl: './onpush-refs.component.html',
  styles: [`
    :host ::ng-deep .notes { color: red; }
    :host ::ng-deep .highlight { background: #ffff67; }
  `]
})
export class OnpushRefsComponent implements OnInit, OnDestroy {
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
        // Freeze the dino so we can't mutate it
        Object.freeze(this.dino);
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    );
    this.resetForm();
  }

  submitForm() {
    // Change this.dino reference
    // We froze this.dino so we cannot mutate it,
    // but we can update the reference to a new object
    this.dino = Object.assign({}, this.dino, this.formData);
    this.resetForm();
  }

  resetForm() {
    this.formData = new DinoForm();
  }

  ngOnDestroy() {
    this.dinoSub.unsubscribe();
  }
}
