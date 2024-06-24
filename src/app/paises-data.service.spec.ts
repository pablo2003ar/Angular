import { TestBed } from '@angular/core/testing';

import { PaisesDataService } from './paises-data.service';

describe('PaisesDataService', () => {
  let service: PaisesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
