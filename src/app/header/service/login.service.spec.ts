import { LoginService } from './login.service';

import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

describe('Login Service', () => {

  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    loginService = TestBed.get(LoginService);
  });

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
