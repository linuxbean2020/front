import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro5050Component } from './intro5050.component';

describe('Intro5050Component', () => {
  let component: Intro5050Component;
  let fixture: ComponentFixture<Intro5050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Intro5050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Intro5050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
