import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner50502Component } from './banner50502.component';

describe('Banner50502Component', () => {
  let component: Banner50502Component;
  let fixture: ComponentFixture<Banner50502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner50502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner50502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
