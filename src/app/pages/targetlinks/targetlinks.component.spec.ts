import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetlinksComponent } from './targetlinks.component';

describe('TargetlinksComponent', () => {
  let component: TargetlinksComponent;
  let fixture: ComponentFixture<TargetlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetlinksComponent ]
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
