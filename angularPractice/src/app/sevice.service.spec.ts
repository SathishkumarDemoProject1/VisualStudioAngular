import { TestBed } from '@angular/core/testing';

import { SeviceService } from './sevice.service';

describe('SeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeviceService = TestBed.get(SeviceService);
    expect(service).toBeTruthy();
  });
});
