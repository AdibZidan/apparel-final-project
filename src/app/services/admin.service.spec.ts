import { AdminService } from './admin.service';
import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

describe('Admin Service', () => {

  let adminService: AdminService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    adminService = TestBed.get(AdminService);
  });

  it('Should exist/be defined', () => {
    expect(adminService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(adminService
      instanceof AdminService)
      .toBeTruthy();
  });

});
