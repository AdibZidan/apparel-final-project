import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';
import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('Authentication Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        { provide: Router },
        { provide: SESSION_STORAGE }
      ]
    });
  });

  it('Should be created/defined',
    inject([AuthenticationGuard],
      (activationGuard: AuthenticationGuard) => {
        expect(activationGuard).toBeDefined();
      }));

});
