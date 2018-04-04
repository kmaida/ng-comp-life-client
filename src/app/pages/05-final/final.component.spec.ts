import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalComponent } from './final.component';
import { LoadingComponent } from '../../core/loading.component';
import { ErrorComponent } from '../../core/error.component';
import { DinoContentComponent } from './dino-content.component';

describe('FinalComponent', () => {
  let component: FinalComponent;
  let fixture: ComponentFixture<FinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalComponent, LoadingComponent, ErrorComponent, DinoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
