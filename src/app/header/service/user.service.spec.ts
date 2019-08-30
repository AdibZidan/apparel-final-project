import { UserService } from './user.service';
import { async, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {

  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
  });

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
