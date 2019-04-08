import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsQuicksearchComponent } from './rfs-quicksearch.component';

describe('RfsQuicksearchComponent', () => {
  let component: RfsQuicksearchComponent;
  let fixture: ComponentFixture<RfsQuicksearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfsQuicksearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsQuicksearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
