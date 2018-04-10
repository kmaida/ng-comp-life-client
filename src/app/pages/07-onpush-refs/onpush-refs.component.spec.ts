import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushRefsComponent } from './onpush-refs.component';

describe('OnpushRefsComponent', () => {
  let component: OnpushRefsComponent;
  let fixture: ComponentFixture<OnpushRefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushRefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
