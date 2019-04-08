import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearProfileComponent } from './gear-profile.component';

describe('GearProfileComponent', () => {
  let component: GearProfileComponent;
  let fixture: ComponentFixture<GearProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
