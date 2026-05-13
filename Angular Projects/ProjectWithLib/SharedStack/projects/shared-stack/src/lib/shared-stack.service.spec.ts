import { TestBed } from '@angular/core/testing';

import { SharedStackService } from './shared-stack.service';

describe('SharedStackService', () => {
  let service: SharedStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
