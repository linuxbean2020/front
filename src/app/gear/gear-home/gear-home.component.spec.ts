import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearHomeComponent } from './gear-home.component';

describe('GearHomeComponent', () => {
  let component: GearHomeComponent;
  let fixture: ComponentFixture<GearHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
