import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text50sixup50Component } from './text50sixup50.component';

describe('Text50sixup50Component', () => {
  let component: Text50sixup50Component;
  let fixture: ComponentFixture<Text50sixup50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text50sixup50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text50sixup50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
