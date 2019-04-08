import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comm50free50Component } from './comm50free50.component';

describe('Comm50free50Component', () => {
  let component: Comm50free50Component;
  let fixture: ComponentFixture<Comm50free50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comm50free50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comm50free50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
