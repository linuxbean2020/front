import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Discuss50aqua50Component } from './discuss50aqua50.component';

describe('Discuss50aqua50Component', () => {
  let component: Discuss50aqua50Component;
  let fixture: ComponentFixture<Discuss50aqua50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Discuss50aqua50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Discuss50aqua50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
