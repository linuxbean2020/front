import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsFooterComponent } from './publications-footer.component';

describe('PublicationsFooterComponent', () => {
  let component: PublicationsFooterComponent;
  let fixture: ComponentFixture<PublicationsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
