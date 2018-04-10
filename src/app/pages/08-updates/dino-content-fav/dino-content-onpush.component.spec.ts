import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoContentOnpushComponent } from './dino-content-onpush.component';

describe('DinoContentOnpushComponent', () => {
  let component: DinoContentOnpushComponent;
  let fixture: ComponentFixture<DinoContentOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoContentOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoContentOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
