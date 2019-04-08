import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSecureHomeComponent } from './mi-secure-home.component';

describe('MiSecureHomeComponent', () => {
  let component: MiSecureHomeComponent;
  let fixture: ComponentFixture<MiSecureHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiSecureHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSecureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
