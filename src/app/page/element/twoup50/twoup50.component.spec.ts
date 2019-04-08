import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Twoup50Component } from './twoup50.component';

describe('Twoup50Component', () => {
  let component: Twoup50Component;
  let fixture: ComponentFixture<Twoup50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Twoup50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Twoup50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
