import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RassSearchComponent } from './rass-search.component';

describe('RassSearchComponent', () => {
  let component: RassSearchComponent;
  let fixture: ComponentFixture<RassSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RassSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RassSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
