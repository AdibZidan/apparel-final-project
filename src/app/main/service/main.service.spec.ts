import { MainService } from './main.service';
import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

describe('Main Service', () => {

  let mainService: MainService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mainService = TestBed.get(MainService);
  });

  it('Should exist/be defined', () => {
    expect(mainService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(mainService
      instanceof MainService)
      .toBeTruthy();
  });

});
