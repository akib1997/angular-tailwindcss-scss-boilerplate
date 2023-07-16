/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlexItemService } from './flex-item.service';

describe('Service: FlexItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlexItemService]
    });
  });

  it('should ...', inject([FlexItemService], (service: FlexItemService) => {
    expect(service).toBeTruthy();
  }));
});
