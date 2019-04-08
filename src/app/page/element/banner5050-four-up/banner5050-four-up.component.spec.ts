import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner5050FourUpComponent } from './banner5050-four-up.component';

describe('Banner5050FourUpComponent', () => {
  let component: Banner5050FourUpComponent;
  let fixture: ComponentFixture<Banner5050FourUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner5050FourUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner5050FourUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
