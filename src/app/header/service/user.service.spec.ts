import { UserService } from './user.service';
import { async, TestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

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

});
