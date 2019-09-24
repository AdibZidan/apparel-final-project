import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({ providedIn: 'root' })

export class NotificationService {

  public configuration: MatSnackBarConfig = {
    verticalPosition: 'bottom',
    duration: 2000,
    panelClass: ['white-snackbar']
  };

  constructor(private matSnackBar: MatSnackBar) { }

  public onSuccess(message: string): void {
    this.matSnackBar.open(message, 'OK', this.configuration);
  }

}
