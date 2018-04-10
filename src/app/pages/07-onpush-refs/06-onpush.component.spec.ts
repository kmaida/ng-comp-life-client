import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 06OnpushComponent } from './06-onpush.component';

describe('06OnpushComponent', () => {
  let component: 06OnpushComponent;
  let fixture: ComponentFixture<06OnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 06OnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(06OnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
