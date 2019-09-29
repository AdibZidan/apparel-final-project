import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  public credentials$: Subscription = new Subscription();
  public logInForm: FormGroup;
  public username: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private matDialogRef: MatDialogRef<LoginComponent>,
    @Inject(SESSION_STORAGE)
    private webStorageService: WebStorageService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.onLogInForm();
  }

  public onLogInForm(): void {
    this.logInForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnDestroy(): void {
    this.credentials$.unsubscribe();
  }

  public onSubmit(): void {
    if (this.logInForm.valid) {
      this.credentials$ = this.getSignInCredentials();
      this.onClose();
    }
  }

  public getSignInCredentials(): Subscription {
    return this.loginService
      .sendSignInCredentials(this.logInForm.value)
      .subscribe(response => {
        if (response.message === 'Success!') {
          this.username = response.correctUser.username;
          this.loadProfile(response.correctUser.authority);
          this.saveToSession('username', response.correctUser.username);
          this.saveToSession('userUuId', response.correctUser.userUuId);
          this.saveToSession('authority', response.correctUser.authority);
          this.saveToSession('basket', response.correctUser.basket);
        } else {
          this.notificationService.onSuccess('Please check your username or password.');
        }
      });
  }

  public onClose(): void {
    this.matDialogRef.close(this.logInForm);
  }

  public loadProfile(authority: string): void {
    if (authority === 'user') {
      this.router.navigate(['/user']);
    } else if (authority === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/main']);
    }
  }

  saveToSession(key: string, value: any): void {
    this.webStorageService.set(key, value);
  }

  getDataFromSession(key: string): void {
    this.username = this.webStorageService.get(key);
  }

}
