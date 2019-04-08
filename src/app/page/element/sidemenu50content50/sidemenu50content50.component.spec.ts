import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidemenu50content50Component } from './sidemenu50content50.component';

describe('Sidemenu50content50Component', () => {
  let component: Sidemenu50content50Component;
  let fixture: ComponentFixture<Sidemenu50content50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sidemenu50content50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidemenu50content50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
