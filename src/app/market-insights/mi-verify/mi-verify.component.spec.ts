import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiVerifyComponent } from './mi-verify.component';

describe('MiVerifyComponent', () => {
  let component: MiVerifyComponent;
  let fixture: ComponentFixture<MiVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
