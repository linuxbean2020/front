import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleSourcingComponent } from './responsible-sourcing.component';

describe('ResponsibleSourcingComponent', () => {
  let component: ResponsibleSourcingComponent;
  let fixture: ComponentFixture<ResponsibleSourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibleSourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
