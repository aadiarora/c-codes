import { TestBed } from '@angular/core/testing';

import { BckenService } from './bcken.service';

describe('BckenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BckenService = TestBed.get(BckenService);
    expect(service).toBeTruthy();
  });
});
