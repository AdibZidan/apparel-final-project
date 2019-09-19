import { SignupComponent } from './signup.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule, MatDialogRef } from '@angular/material';

describe('Sign Up Component', () => {

  let signUpComponent: SignupComponent;
  let signUpFixture: ComponentFixture<SignupComponent>;

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
      declarations: [SignupComponent],
      providers: [
        { provide: MatDialogRef }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    signUpFixture = TestBed.createComponent(SignupComponent);
    signUpComponent = signUpFixture.componentInstance;

    debugElement = signUpFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(signUpComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(signUpComponent
      instanceof SignupComponent)
      .toBeTruthy();
  });

  it(`Should return false if there are no spaces via 'noSpace' method`, () => {
    const truthyCondition = signUpComponent.noSpace('NoSpace');

    expect(truthyCondition).toBe(false);
  });

  it(`Should return true if there are spaces via 'noSpace' method`, () => {
    const falsyCondition = signUpComponent.noSpace('With space');

    expect(falsyCondition).toBe(true);
  });

  it(`Should return false if there are no lower-case letters via 'isLowerCased' method`, () => {
    const falsyCondition: boolean = signUpComponent.isLowerCased('HI!');

    expect(falsyCondition).toBe(false);
  });

  it(`Should return true if there are lower-case letters via 'isLowerCased' method`, () => {
    const falsyCondition: boolean = signUpComponent.isLowerCased('hi!');

    expect(falsyCondition).toBe(true);
  });

  describe('Sign Up Component Properties', () => {

    it(`Should have an undefined 'formGroup' property before 'ngOnInit'`, () => {
      const actualFormGroup = signUpComponent.formGroup;

      expect(actualFormGroup).toBeUndefined();
    });

    it(`Should have a truthy 'hidePassword' property before 'ngOnInit'`, () => {
      const expectedHidePasswordProperty = true;
      const actualHidePasswordProperty = signUpComponent.hidePassword;

      expect(actualHidePasswordProperty).toBe(expectedHidePasswordProperty);
    });

    it(`Should have a falsy 'isValidForm' property before 'ngOnInit'`, () => {
      const expectedIsValidFormProperty = false;
      const actualIsValidProperty = signUpComponent.isValidForm;

      expect(actualIsValidProperty).toBe(expectedIsValidFormProperty);
    });

    it(`Should have a 'validPattern' property before 'ngOnInit'`, () => {
      const expectedValidPatternProperty = '(?=.*\[0-9])(?=.*[a-z])(?=.*[A-Z]).*';
      const actualValidPatternProperty = signUpComponent.validPattern;

      expect(actualValidPatternProperty).toBe(expectedValidPatternProperty);
    });

    it(`Should have a 'noSpacePattern' property before 'ngOnInit'`, () => {
      const expectedNoSpacePatternProperty = '[^ ]*';
      const actualNoSpacePatternProperty = signUpComponent.noSpacePattern;

      expect(actualNoSpacePatternProperty).toBe(expectedNoSpacePatternProperty);
    });

    it(`Should have a 'noSpecialCharactersPattern' before 'ngOnInit'`, () => {
      const expectedNoSpecialCharactersPatternProperty = '[^-+_!@#$%^&*.,?]*';
      const actualNoSpecialCharactersPatternProperty = signUpComponent.noSpecialCharactersPattern;

      expect(actualNoSpecialCharactersPatternProperty).toBe(expectedNoSpecialCharactersPatternProperty);
    });

    it(`Should have a defined 'passwordVerifier' property before 'ngOnInit'`, () => {
      const actualPasswordVerifier = signUpComponent.passwordVerifier;

      expect(actualPasswordVerifier).toBeDefined();
    });

  });

});
