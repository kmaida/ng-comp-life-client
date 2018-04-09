import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoContentComponent } from './dino-content.component';

describe('DinoContentComponent', () => {
  let component: DinoContentComponent;
  let fixture: ComponentFixture<DinoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
