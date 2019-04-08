import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBannerTwoUpComponent } from './video-banner-two-up.component';

describe('VideoBannerTwoUpComponent', () => {
  let component: VideoBannerTwoUpComponent;
  let fixture: ComponentFixture<VideoBannerTwoUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBannerTwoUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBannerTwoUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
