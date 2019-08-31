import { AuthenticationService } from './authentication.service';
import { TestBed } from '@angular/core/testing';

describe('Authentication Service', () => {

  let authenticationService: AuthenticationService;

  beforeEach(() => {
    authenticationService = TestBed.get(AuthenticationService);
  });

  it('Should exist/be defined', () => {
    expect(authenticationService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(authenticationService
      instanceof AuthenticationService)
      .toBeTruthy();
  });

});
