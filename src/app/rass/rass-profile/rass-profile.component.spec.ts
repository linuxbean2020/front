import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RassProfileComponent } from './rass-profile.component';

describe('RassProfileComponent', () => {
  let component: RassProfileComponent;
  let fixture: ComponentFixture<RassProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RassProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RassProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
