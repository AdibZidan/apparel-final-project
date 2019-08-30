import { BasketService } from './basket.service';
import { async, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

describe('BasketService', () => {

  let basketService: BasketService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    basketService = TestBed.get(BasketService);
  });

  it('Should exist/be defined', () => {
    expect(basketService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(basketService
      instanceof BasketService)
      .toBeTruthy();
  });

});
