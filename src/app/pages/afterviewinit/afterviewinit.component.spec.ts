import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewinitComponent } from './afterviewinit.component';
import { LoadingComponent } from '../../core/loading.component';
import { ErrorComponent } from '../../core/error.component';

describe('AfterviewinitComponent', () => {
  let component: AfterviewinitComponent;
  let fixture: ComponentFixture<AfterviewinitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterviewinitComponent, LoadingComponent, ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterviewinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
