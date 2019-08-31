import { MainComponent } from './main.component';

import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { CatalogueComponent } from './catalogue/catalogue/catalogue.component';
import { ItemComponent } from './item/item/item.component';

import { Router } from '@angular/router';
import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('MainComponent', () => {

  let mainComponent: MainComponent;
  let mainFixture: ComponentFixture<MainComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [
        MainComponent,
        CatalogueComponent,
        ItemComponent
      ],
      providers: [
        { provide: Router },
        { provide: SESSION_STORAGE }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    mainFixture = TestBed.createComponent(MainComponent);
    mainComponent = mainFixture.componentInstance;

    debugElement = mainFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(mainComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(mainComponent
      instanceof MainComponent)
      .toBeTruthy();
  });

});
