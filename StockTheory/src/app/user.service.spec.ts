import { TestBed, inject } from '@angular/core/testing';

import { UserProfileService } from './UserProfile.service';

describe('UserProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileService]
    });
  });

  it('should be created', inject([UserProfileService], (service: UserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
