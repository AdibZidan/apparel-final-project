import { LoginComponent } from './login.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('LogIn Component', () => {

  let loginComponent: LoginComponent;
  let loginFixture: ComponentFixture<LoginComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: Router },
        { provide: MatDialogRef },
        { provide: SESSION_STORAGE }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    loginFixture = TestBed.createComponent(LoginComponent);
    loginComponent = loginFixture.componentInstance;

    debugElement = loginFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(loginComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(loginComponent
      instanceof LoginComponent)
      .toBeTruthy();
  });

  it(`Should have a defined 'credentials$' property`, () => {
    const credentials$ = loginComponent.credentials$;

    expect(credentials$).toBeDefined();
  });

  it(`Should have an undefined 'logInForm' property before 'ngOnInit'`, () => {
    const logInForm = loginComponent.logInForm;

    expect(logInForm).toBeUndefined();
  });

  it(`Should have an undefined 'userName' property before 'ngOnInit'`, () => {
    const userName = loginComponent.userName;

    expect(userName).toBeUndefined();
  });

});
