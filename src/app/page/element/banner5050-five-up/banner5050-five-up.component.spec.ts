import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner5050FiveUpComponent } from './banner5050-five-up.component';

describe('Banner5050FiveUpComponent', () => {
  let component: Banner5050FiveUpComponent;
  let fixture: ComponentFixture<Banner5050FiveUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner5050FiveUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner5050FiveUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
