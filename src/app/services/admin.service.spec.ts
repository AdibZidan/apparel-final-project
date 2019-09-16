import { AdminService } from './admin.service';
import { TestBed, async } from '@angular/core/testing';

import { HttpTestingController, TestRequest, HttpClientTestingModule } from '@angular/common/http/testing';

import { itemMock } from '../mocks/item-mock';
import { ItemForm } from '../forms/ItemForm';

describe('Admin Service', () => {

  let adminService: AdminService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    }).compileComponents();
  }));

  beforeEach(() => {
    adminService = TestBed.get(AdminService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('Should exist/be defined', () => {
    expect(adminService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(adminService
      instanceof AdminService)
      .toBeTruthy();
  });

  it(`Should add an item via the 'POST' request`, () => {
    adminService.sendItemToServer(itemMock)
      .subscribe((mocked: ItemForm) => {
        expect(mocked).toEqual(itemMock);
      });

    const url = 'http://localhost:3000/items';
    const request: TestRequest = httpTestingController.expectOne(url);
    const method: string = request.request.method;

    expect(method).toEqual('POST');

    request.flush(itemMock);
  });

  describe('Admin Service Properties', () => {

    it(`Should have a defined 'url' property`, () => {
      const expectedURLProperty = 'http://localhost:3000/items';
      const actualURLProperty = adminService.url;

      expect(actualURLProperty).toEqual(expectedURLProperty);
    });

  });

});
