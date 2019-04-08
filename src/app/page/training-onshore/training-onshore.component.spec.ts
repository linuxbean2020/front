import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOnshoreComponent } from './training-onshore.component';

describe('TrainingOnshoreComponent', () => {
  let component: TrainingOnshoreComponent;
  let fixture: ComponentFixture<TrainingOnshoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOnshoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOnshoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
