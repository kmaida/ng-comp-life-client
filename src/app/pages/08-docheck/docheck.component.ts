import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { IDinosaur } from '../../shared/dinosaur.model';

class DinoForm {
  constructor(
    name?: string,
    info?: string
  ) {}
}

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styles: []
})
export class DocheckComponent implements OnInit {
  dino$: Observable<IDinosaur> = this.data.getSpecialDino$().pipe(
    tap(
      dino => {
        this.dino = dino;
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    )
  );
  dino: IDinosaur;
  formData;
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
