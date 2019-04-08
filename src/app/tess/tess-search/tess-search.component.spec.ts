import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TessSearchComponent } from './tess-search.component';

describe('TessSearchComponent', () => {
  let component: TessSearchComponent;
  let fixture: ComponentFixture<TessSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
