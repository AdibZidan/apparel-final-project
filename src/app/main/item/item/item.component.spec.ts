import { ItemComponent } from './item.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { Router } from '@angular/router';
import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('Item Component', () => {

  let itemComponent: ItemComponent;
  let itemFixture: ComponentFixture<ItemComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [ItemComponent],
      providers: [
        { provide: Router },
        { provide: SESSION_STORAGE }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    itemFixture = TestBed.createComponent(ItemComponent);
    itemComponent = itemFixture.componentInstance;

    debugElement = itemFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(itemComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(itemComponent
      instanceof ItemComponent)
      .toBeTruthy();
  });

  describe('Item Component Properties', () => {

    it(`Should have an undefined 'images$' property before 'ngOnInit'`, () => {
      const actualImages$Property = itemComponent.images$;

      expect(actualImages$Property).toBeUndefined();
    });

  });

});
