import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TessSearchResultsComponent } from './tess-search-results.component';

describe('TessSearchResultsComponent', () => {
  let component: TessSearchResultsComponent;
  let fixture: ComponentFixture<TessSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
