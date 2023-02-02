import { TestBed } from '@angular/core/testing';

import { SingleEventDataService } from './single-event-data.service';

describe('SingleEventDataService', () => {
  let service: SingleEventDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleEventDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
