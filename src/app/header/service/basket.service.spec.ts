import { BasketService } from './basket.service';
import { async, TestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { reservedItemMock } from 'src/app/mocks/reserved-item-mock';
import { ReserveForm } from 'src/app/forms/ReserveForm';

describe('Basket Service', () => {

  let basketService: BasketService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    basketService = TestBed.get(BasketService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('Should exist/be defined', () => {
    expect(basketService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(basketService
      instanceof BasketService)
      .toBeTruthy();
  });

  it(`Should reserve an item via a 'PUT' request`, () => {
    basketService
      .reserveItem(reservedItemMock)
      .subscribe((itemToReserve: ReserveForm) => {
        expect(itemToReserve).toEqual(reservedItemMock);
      });

    const itemsUrl = 'http://localhost:3000/items';
    const request = httpTestingController.expectOne(itemsUrl);
    const method = request.request.method;

    expect(method).toEqual('PUT');

    request.flush(reservedItemMock);
  });

});
