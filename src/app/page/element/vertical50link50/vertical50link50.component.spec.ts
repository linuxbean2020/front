import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vertical50link50Component } from './vertical50link50.component';

describe('Vertical50link50Component', () => {
  let component: Vertical50link50Component;
  let fixture: ComponentFixture<Vertical50link50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vertical50link50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vertical50link50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
