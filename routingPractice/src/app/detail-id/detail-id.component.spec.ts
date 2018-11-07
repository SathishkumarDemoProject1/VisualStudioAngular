import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIdComponent } from './detail-id.component';

describe('DetailIdComponent', () => {
  let component: DetailIdComponent;
  let fixture: ComponentFixture<DetailIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
