import { LoginService } from './login.service';
import { TestBed, async } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

});
