import { Component, OnInit } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {

  public matDialogConfig = new MatDialogConfig();

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }

  public onClick(): void {
    this.matDialogConfig.autoFocus = true;
    this.matDialogConfig.disableClose = true;
    this.matDialog.open(LoginComponent, this.matDialogConfig);
  }

  public onSignUpClick(): void {
    this.matDialogConfig.autoFocus = true;
    this.matDialogConfig.disableClose = true;
    this.matDialog.open(SignupComponent, this.matDialogConfig);
  }

}
