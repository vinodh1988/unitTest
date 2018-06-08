import { TestBed, inject } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  let test:AuthServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService]
    });
  });

  beforeEach(inject([AuthServiceService], (service: AuthServiceService) => {
    test=service;
  }));

  it('should be created',() => {
    expect(test).toBeTruthy();
  });

   it('user should be elxsi',() => {
    expect(test.user).toEqual('CGI-TEST');
  });
  
});
