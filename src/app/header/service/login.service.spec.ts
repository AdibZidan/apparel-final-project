import { LoginService } from './login.service';
import { TestBed, async } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { loginFormMock } from 'src/app/mocks/login-form-mock';
import { LoginForm } from '../authorization/login/LoginForm';

describe('LogIn Service', () => {

  let loginService: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    loginService = TestBed.get(LoginService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('Should exist/be defined', () => {
    expect(loginService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(loginService
      instanceof LoginService)
      .toBeTruthy();
  });

  it(`It should have a 'signInURL'`, () => {
    const expectedSignInURL = 'http://localhost:3000/signin';
    const actualSignInURL = loginService.signURL;

    expect(actualSignInURL).toEqual(expectedSignInURL);
  });

  it(`Should send sign in credentials via a 'POST' request`, () => {
    loginService
      .sendSignInCredentials(loginFormMock)
      .subscribe((credentialsToSend: LoginForm) => {
        expect(credentialsToSend).toEqual(loginFormMock);
      });

    const url = 'http://localhost:3000/signin';
    const request: TestRequest = httpTestingController.expectOne(url);
    const method: string = request.request.method;

    expect(method).toEqual('POST');

    request.flush(loginFormMock);
  });

});
