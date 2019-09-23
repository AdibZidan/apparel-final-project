import { UserService } from './user.service';
import { async, TestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { signUpFormMock } from 'src/app/mocks/sign-up-form-mock';
import { SignUpForm } from 'src/app/forms/SignUpForm';

describe('User Service', () => {

  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('Should exist/be defined', () => {
    expect(userService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(userService
      instanceof UserService)
      .toBeTruthy();
  });

  it(`Should have a defined 'backEndLocalURL' property`, () => {
    const expectedBackEndLocalURL = 'http://localhost:3000/signup';
    const actualBackEndLocalURL: string = userService.backEndLocalUrl;

    expect(actualBackEndLocalURL).toEqual(expectedBackEndLocalURL);
  });

  it(`Should add form to back-end via a 'POST' request`, () => {
    userService
      .addFormToBackEnd(signUpFormMock)
      .subscribe((formToAdd: SignUpForm) => {
        expect(formToAdd).toEqual(signUpFormMock);
      });

    const backEndLocalURL = 'http://localhost:3000/signup';
    const request = httpTestingController.expectOne(backEndLocalURL);
    const method: string = request.request.method;

    expect(method).toEqual('POST');
  });

});
