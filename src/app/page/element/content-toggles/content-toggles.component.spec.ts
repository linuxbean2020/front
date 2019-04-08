import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTogglesComponent } from './content-toggles.component';

describe('ContentTogglesComponent', () => {
  let component: ContentTogglesComponent;
  let fixture: ComponentFixture<ContentTogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTogglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
