import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RassHomeComponent } from './rass-home.component';

describe('RassHomeComponent', () => {
  let component: RassHomeComponent;
  let fixture: ComponentFixture<RassHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RassHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RassHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
