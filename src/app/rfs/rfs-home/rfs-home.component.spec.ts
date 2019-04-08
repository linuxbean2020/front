import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsHomeComponent } from './rfs-home.component';

describe('RfsHomeComponent', () => {
  let component: RfsHomeComponent;
  let fixture: ComponentFixture<RfsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
