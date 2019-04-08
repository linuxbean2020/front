import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News34Event14Component } from './news34event14.component';

describe('News34Component', () => {
  let component: News34Event14Component;
  let fixture: ComponentFixture<News34Event14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News34Event14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News34Event14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
