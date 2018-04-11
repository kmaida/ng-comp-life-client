import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/data.service';
import { IDinosaur } from '../../shared/dinosaur.model';
import { tap } from 'rxjs/operators';

class DinoForm {
  constructor(
    name?: string,
    info?: string
  ) {}
}

@Component({
  selector: 'app-onpush-refs',
  templateUrl: './onpush-refs.component.html',
  styles: []
})
export class OnpushRefsComponent implements OnInit {
  dino: IDinosaur;
  formData;
  dino$: Observable<IDinosaur>;
  loading = true;
  error: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dino$ = this.data.getSpecialDino$().pipe(
      tap(
        res => {
          this.dino = res;
          this.loading = false;
          // Freeze the dino so we can't mutate it
          Object.freeze(this.dino);
        },
        err => {
          this.loading = false;
          this.error = true;
        }
      )
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
}
