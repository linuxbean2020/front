import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingLandscapesComponent } from './changing-landscapes.component';

describe('ChangingLandscapesComponent', () => {
  let component: ChangingLandscapesComponent;
  let fixture: ComponentFixture<ChangingLandscapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangingLandscapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingLandscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
