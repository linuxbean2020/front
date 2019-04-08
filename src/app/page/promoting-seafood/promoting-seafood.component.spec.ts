import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotingSeafoodComponent } from './promoting-seafood.component';

describe('PromotingSeafoodComponent', () => {
  let component: PromotingSeafoodComponent;
  let fixture: ComponentFixture<PromotingSeafoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotingSeafoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotingSeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
