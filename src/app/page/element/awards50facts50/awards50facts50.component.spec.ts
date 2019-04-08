import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Awards50facts50Component } from './awards50facts50.component';

describe('Awards50facts50Component', () => {
  let component: Awards50facts50Component;
  let fixture: ComponentFixture<Awards50facts50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Awards50facts50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Awards50facts50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
