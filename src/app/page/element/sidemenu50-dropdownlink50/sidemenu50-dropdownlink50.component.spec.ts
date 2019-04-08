import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidemenu50Dropdownlink50Component } from './sidemenu50-dropdownlink50.component';

describe('Sidemenu50Dropdownlink50Component', () => {
  let component: Sidemenu50Dropdownlink50Component;
  let fixture: ComponentFixture<Sidemenu50Dropdownlink50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sidemenu50Dropdownlink50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidemenu50Dropdownlink50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
