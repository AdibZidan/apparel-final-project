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

  it(`Should spyOn 'isLoggedIn' & return 'true'`, () => {
    spyOn(authenticationService, 'isLoggedIn')
      .and.returnValue(true);

    expect(authenticationService.isLoggedIn()).toBe(true);
  });

  it(`Should spyOn 'isLoggedIn' & return 'false'`, () => {
    spyOn(authenticationService, 'isLoggedIn')
      .and.returnValue(false);

    expect(authenticationService.isLoggedIn()).toBe(false);
  });

  it(`Should return an initial falsy value via the 'isUserLoggedIn' method`, () => {
    expect(authenticationService.isUserLoggedIn()).toBe(false);
  });

  it(`Should return an initial falsy value via the 'isAdminLoggedIn' method`, () => {
    expect(authenticationService.isAdminLoggedIn()).toBe(false);
  });

});
