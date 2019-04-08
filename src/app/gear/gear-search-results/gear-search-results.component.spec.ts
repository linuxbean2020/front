import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearSearchResultsComponent } from './gear-search-results.component';

describe('GearSearchResultsComponent', () => {
  let component: GearSearchResultsComponent;
  let fixture: ComponentFixture<GearSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
