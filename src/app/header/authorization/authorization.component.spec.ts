import { AuthorizationComponent } from './authorization.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule, MatDialogModule } from '@angular/material';

describe('Authorization Component', () => {

  let authorizationComponent: AuthorizationComponent;
  let authorizationFixture: ComponentFixture<AuthorizationComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatDialogModule
      ],
      declarations: [AuthorizationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    authorizationFixture = TestBed.createComponent(AuthorizationComponent);
    authorizationComponent = authorizationFixture.componentInstance;

    debugElement = authorizationFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(authorizationComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(authorizationComponent
      instanceof AuthorizationComponent)
      .toBeTruthy();
  });

  describe('Authorization Component Properties', () => {

    it(`Should have a defined 'matDialogConfig' property`, () => {
      const actualMatDialogConfigProperty = authorizationComponent.matDialogConfig;

      expect(actualMatDialogConfigProperty).toBeDefined();
    });

  });

});
