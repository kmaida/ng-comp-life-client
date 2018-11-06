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
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styles: []
})
export class OnpushComponent implements OnInit {
  dino: IDinosaur;
  formData;
  dino$: Observable<IDinosaur> = this.data.getSpecialDino$().pipe(
    tap(
      res => {
        this.dino = res;
        this.loading = false;
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
    // Update properties of this.dino
    if (this.formData.name) {
      this.dino.name = this.formData.name;
    }
    if (this.formData.info) {
      this.dino.info = this.formData.info;
    }
    this.resetForm();
  }

  resetForm(): void {
    this.formData = new DinoForm();
  }
}
