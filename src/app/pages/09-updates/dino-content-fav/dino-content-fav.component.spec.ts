import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoContentFavComponent } from './dino-content-fav.component';

describe('DinoContentFavComponent', () => {
  let component: DinoContentFavComponent;
  let fixture: ComponentFixture<DinoContentFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoContentFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoContentFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
