import { TestBed } from '@angular/core/testing';

import { Fetchdata2Service } from './fetchdata2.service';

describe('Fetchdata2Service', () => {
  let service: Fetchdata2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fetchdata2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
