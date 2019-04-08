import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFooterComponent } from './temp-footer.component';

describe('TempFooterComponent', () => {
  let component: TempFooterComponent;
  let fixture: ComponentFixture<TempFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
