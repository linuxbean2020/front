import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDropdownLeftComponent } from './link-dropdown-left.component';

describe('LinkDropdownLeftComponent', () => {
  let component: LinkDropdownLeftComponent;
  let fixture: ComponentFixture<LinkDropdownLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDropdownLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDropdownLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
