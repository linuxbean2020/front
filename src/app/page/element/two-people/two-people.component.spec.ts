import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPeopleComponent } from './two-people.component';

describe('TwoPeopleComponent', () => {
  let component: TwoPeopleComponent;
  let fixture: ComponentFixture<TwoPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
