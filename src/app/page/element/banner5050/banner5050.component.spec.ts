import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner5050Component } from './banner5050.component';

describe('Banner5050Component', () => {
  let component: Banner5050Component;
  let fixture: ComponentFixture<Banner5050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner5050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner5050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
