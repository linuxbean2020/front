import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdsBanner2Component } from './thirds-banner2.component';

describe('ThirdsBanner2Component', () => {
  let component: ThirdsBanner2Component;
  let fixture: ComponentFixture<ThirdsBanner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdsBanner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdsBanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
