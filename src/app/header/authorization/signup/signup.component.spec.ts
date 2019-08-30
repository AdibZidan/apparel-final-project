import { SignupComponent } from './signup.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule, MatDialogRef } from '@angular/material';

describe('SignupComponent', () => {

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

});
