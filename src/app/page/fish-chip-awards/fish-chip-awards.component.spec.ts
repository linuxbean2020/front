import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishChipAwardsComponent } from './fish-chip-awards.component';

describe('FishChipAwardsComponent', () => {
  let component: FishChipAwardsComponent;
  let fixture: ComponentFixture<FishChipAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishChipAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishChipAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
