import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
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
export class DocheckComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.dinoSub.unsubscribe();
  }
}
