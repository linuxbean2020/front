import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TessProfileComponent } from './tess-profile.component';

describe('TessProfileComponent', () => {
  let component: TessProfileComponent;
  let fixture: ComponentFixture<TessProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
