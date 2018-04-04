import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';
import { LoadingComponent } from '../../core/loading.component';
import { ErrorComponent } from '../../core/error.component';
import { DinoComponent } from '../../core/dino/dino.component';
import { ApiService } from '../../core/api.service';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncComponent, LoadingComponent, ErrorComponent, DinoComponent ],
      imports: [ ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
