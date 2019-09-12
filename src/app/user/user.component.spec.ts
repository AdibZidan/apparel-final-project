import { UserComponent } from './user.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { MainComponent } from '../main/main.component';
import { CatalogueComponent } from '../main/catalogue/catalogue/catalogue.component';
import { ItemComponent } from '../main/item/item/item.component';

import { SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';

describe('User Component', () => {

  let userComponent: UserComponent;
  let userFixture: ComponentFixture<UserComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [
        UserComponent,
        MainComponent,
        CatalogueComponent,
        ItemComponent
      ],
      providers: [
        { provide: SESSION_STORAGE },
        { provide: Router }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    userFixture = TestBed.createComponent(UserComponent);
    userComponent = userFixture.componentInstance;

    debugElement = userFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(userComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(userComponent
      instanceof UserComponent)
      .toBeTruthy();
  });

  describe('User Component Properties', () => {

    it(`Should have an undefined 'userName' property before 'ngOnInit'`, () => {
      const actualUserNameProperty = userComponent.userName;

      expect(actualUserNameProperty).toBeUndefined();
    });

  });

  describe('User Component HTML', () => {

    let divTag: HTMLDivElement;
    let h3Tag: HTMLHeadingElement;
    let spanTag: HTMLSpanElement;
    let mainTag: HTMLDivElement;

    beforeEach(() => {
      divTag = htmlElement.querySelector('div.catalogue');
      h3Tag = htmlElement.querySelector('h3.test');
      spanTag = htmlElement.querySelector('span.userName');
      mainTag = htmlElement.querySelector('div app-main');
    });

    it(`Should contain a div tag with the class-name of 'catalogue'`, () => {
      expect(divTag).toBeDefined();
      expect(divTag).toBeTruthy();
    });

  });

});
