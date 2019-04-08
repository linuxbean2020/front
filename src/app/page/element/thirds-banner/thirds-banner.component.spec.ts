import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdsBannerComponent } from './thirds-banner.component';

describe('ThirdsBannerComponent', () => {
  let component: ThirdsBannerComponent;
  let fixture: ComponentFixture<ThirdsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
