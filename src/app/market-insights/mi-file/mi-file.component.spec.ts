import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFileComponent } from './mi-file.component';

describe('MiFileComponent', () => {
  let component: MiFileComponent;
  let fixture: ComponentFixture<MiFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
