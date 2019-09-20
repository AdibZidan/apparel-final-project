import { LoginComponent } from './login.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule, MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { Router } from '@angular/router';
import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('LogIn Component', () => {

  let loginComponent: LoginComponent;
  let loginFixture: ComponentFixture<LoginComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent],
      providers: [
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

    router = TestBed.get(Router);
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

  it(`Should load the user profile if 'user' input is given via 'loadProfile' method`, () => {
    const navigateSpy = spyOn(router, 'navigate');

    loginComponent.loadProfile('user');

    expect(navigateSpy).toHaveBeenCalledWith(['/user']);
  });

  describe('LogIn Component Properties', () => {

    it(`Should have a defined 'credentials$' property`, () => {
      const actualCredentials$Property = loginComponent.credentials$;

      expect(actualCredentials$Property).toBeDefined();
    });

    it(`Should have an undefined 'logInForm' property before 'ngOnInit'`, () => {
      const actualLogInFormProperty = loginComponent.logInForm;

      expect(actualLogInFormProperty).toBeUndefined();
    });

    it(`Should have an undefined 'userName' property before 'ngOnInit'`, () => {
      const actualUserNameProperty = loginComponent.userName;

      expect(actualUserNameProperty).toBeUndefined();
    });

  });

});
