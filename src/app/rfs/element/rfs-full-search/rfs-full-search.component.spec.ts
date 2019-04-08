import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsFullSearchComponent } from './rfs-full-search.component';

describe('RfsFullSearchComponent', () => {
  let component: RfsFullSearchComponent;
  let fixture: ComponentFixture<RfsFullSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfsFullSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsFullSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
