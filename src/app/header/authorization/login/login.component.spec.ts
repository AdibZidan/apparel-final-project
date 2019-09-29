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

  let navigateSpy;

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

    navigateSpy = spyOn(router, 'navigate');
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
    loginComponent.loadProfile('user');

    expect(navigateSpy).toHaveBeenCalledWith(['/user']);
  });

  it(`Should load the admin profile if 'admin' input is given via 'loadProfile' method`, () => {
    loginComponent.loadProfile('admin');

    expect(navigateSpy).toHaveBeenCalledWith(['/admin']);
  });

  it(`Should load the main profile if nor 'user' or 'admin' input is given via 'loadProfile' method`, () => {
    loginComponent.loadProfile('NotUserOrAdmin');

    expect(navigateSpy).toHaveBeenCalledWith(['/main']);
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

    it(`Should have an undefined 'username' property before 'ngOnInit'`, () => {
      const actualUserNameProperty = loginComponent.username;

      expect(actualUserNameProperty).toBeUndefined();
    });

  });

});
