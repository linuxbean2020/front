import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsProfileComponent } from './rfs-profile.component';

describe('RfsProfileComponent', () => {
  let component: RfsProfileComponent;
  let fixture: ComponentFixture<RfsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
