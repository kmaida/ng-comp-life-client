import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { LoadingComponent } from '../../core/loading.component';
import { ErrorComponent } from '../../core/error.component';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent, LoadingComponent, ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
