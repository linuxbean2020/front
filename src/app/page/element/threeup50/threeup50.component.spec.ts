import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Threeup50Component } from './threeup50.component';

describe('Threeup50Component', () => {
  let component: Threeup50Component;
  let fixture: ComponentFixture<Threeup50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Threeup50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Threeup50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
