import { NotificationService } from './notification.service';
import { async, TestBed } from '@angular/core/testing';

import { MatSnackBarModule } from '@angular/material';

describe('Notification Service', () => {

  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    notificationService = TestBed.get(NotificationService);
  });

  it('Should exist/be defined', () => {
    expect(notificationService)
      .toBeTruthy();
  });

  it('Should be built/compiled', () => {
    expect(notificationService
      instanceof NotificationService)
      .toBeTruthy();
  });

});
