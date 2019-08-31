import { CatalogueComponent } from './catalogue.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { ItemComponent } from '../../item/item/item.component';

import { Router } from '@angular/router';
import { SESSION_STORAGE } from 'angular-webstorage-service';


describe('CatalogueComponent', () => {

  let catalogueComponent: CatalogueComponent;
  let catalogueFixture: ComponentFixture<CatalogueComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [
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
    catalogueFixture = TestBed.createComponent(CatalogueComponent);
    catalogueComponent = catalogueFixture.componentInstance;

    debugElement = catalogueFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(catalogueComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(catalogueComponent
      instanceof CatalogueComponent)
      .toBeTruthy();
  });

});
