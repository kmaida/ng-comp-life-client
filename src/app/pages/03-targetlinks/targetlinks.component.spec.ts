import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetlinksComponent } from './targetlinks.component';
import { LoadingComponent } from '../../core/loading.component';
import { ErrorComponent } from '../../core/error.component';

describe('TargetlinksComponent', () => {
  let component: TargetlinksComponent;
  let fixture: ComponentFixture<TargetlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetlinksComponent, LoadingComponent, ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
