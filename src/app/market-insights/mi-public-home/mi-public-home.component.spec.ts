import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPublicHomeComponent } from './mi-public-home.component';

describe('MiPublicHomeComponent', () => {
  let component: MiPublicHomeComponent;
  let fixture: ComponentFixture<MiPublicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPublicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPublicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
