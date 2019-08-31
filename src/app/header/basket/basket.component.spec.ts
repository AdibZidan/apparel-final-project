import { BasketComponent } from './basket.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { MatMenuModule, MatDividerModule, MatListModule } from '@angular/material';

import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('Basket Component', () => {

  let basketComponent: BasketComponent;
  let basketFixture: ComponentFixture<BasketComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        MatDividerModule,
        MatListModule
      ],
      declarations: [BasketComponent],
      providers: [{ provide: SESSION_STORAGE }]
    }).compileComponents();
  }));

  beforeEach(() => {
    basketFixture = TestBed.createComponent(BasketComponent);
    basketComponent = basketFixture.componentInstance;

    debugElement = basketFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(basketComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(basketComponent
      instanceof BasketComponent)
      .toBeTruthy();
  });

});
