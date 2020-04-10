import { TestBed } from '@angular/core/testing';

import { Fetchdata3Service } from './fetchdata3.service';

describe('Fetchdata3Service', () => {
  let service: Fetchdata3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fetchdata3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
