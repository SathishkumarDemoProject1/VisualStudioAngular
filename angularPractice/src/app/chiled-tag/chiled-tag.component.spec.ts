import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiledTagComponent } from './chiled-tag.component';

describe('ChiledTagComponent', () => {
  let component: ChiledTagComponent;
  let fixture: ComponentFixture<ChiledTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiledTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiledTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
