import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightResearchComponent } from './insight-research.component';

describe('InsightResearchComponent', () => {
  let component: InsightResearchComponent;
  let fixture: ComponentFixture<InsightResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
