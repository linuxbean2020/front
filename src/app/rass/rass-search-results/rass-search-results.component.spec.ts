import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RassSearchResultsComponent } from './rass-search-results.component';

describe('RassSearchResultsComponent', () => {
  let component: RassSearchResultsComponent;
  let fixture: ComponentFixture<RassSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RassSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RassSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
