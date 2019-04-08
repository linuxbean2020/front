import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TessHomeComponent } from './tess-home.component';

describe('TessHomeComponent', () => {
  let component: TessHomeComponent;
  let fixture: ComponentFixture<TessHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
