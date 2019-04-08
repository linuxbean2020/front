import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatNewsComponent } from './single-cat-news.component';

describe('SingleCatNewsComponent', () => {
  let component: SingleCatNewsComponent;
  let fixture: ComponentFixture<SingleCatNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCatNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCatNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
