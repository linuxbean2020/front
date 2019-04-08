import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comm50update50Component } from './comm50update50.component';

describe('Comm50update50Component', () => {
  let component: Comm50update50Component;
  let fixture: ComponentFixture<Comm50update50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comm50update50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comm50update50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
