import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewinitComponent } from './afterviewinit.component';

describe('AfterviewinitComponent', () => {
  let component: AfterviewinitComponent;
  let fixture: ComponentFixture<AfterviewinitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterviewinitComponent ]
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
