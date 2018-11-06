import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  dino$: Observable<IDinosaur> = this.data.getSpecialDino$().pipe(
    tap(
      res => {
        this.dino = res;
        this.loading = false;
        // Freeze dino so we can't mutate it
        Object.freeze(this.dino);
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    )
  );
  loading = true;
  error: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.resetForm();
  }

  submitForm(): void {
    // Change this.dino reference:
    // we froze this.dino so we cannot mutate its properties.
    // We should change the reference to a new object
    this.dino = Object.assign({}, this.dino, this.formData);
    this.resetForm();
  }

  resetForm(): void {
    this.formData = new DinoForm();
  }
}
