/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CSSPropertyDetailsService } from './CSSPropertyDetails.service';

describe('Service: CSSPropertyDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CSSPropertyDetailsService]
    });
  });

  it('should ...', inject([CSSPropertyDetailsService], (service: CSSPropertyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
