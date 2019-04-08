import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facts50careers50Component } from './facts50careers50.component';

describe('Facts50careers50Component', () => {
  let component: Facts50careers50Component;
  let fixture: ComponentFixture<Facts50careers50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facts50careers50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facts50careers50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
