import { TestBed, inject } from '@angular/core/testing';

import { WishListServiceService } from './wish-list-service.service';

describe('WishListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishListServiceService]
    });
  });

  it('should be created', inject([WishListServiceService], (service: WishListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
