import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTextImageComponent } from './vertical-text-image.component';

describe('VerticalTextImageComponent', () => {
  let component: VerticalTextImageComponent;
  let fixture: ComponentFixture<VerticalTextImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalTextImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
