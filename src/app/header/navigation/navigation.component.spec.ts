import { NavigationComponent } from './navigation.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { SearchComponent } from '../search/search.component';
import { AuthorizationComponent } from '../authorization/authorization.component';
import { BasketComponent } from '../basket/basket.component';
import { MatMenuModule, MatDividerModule, MatListModule, MatDialogModule } from '@angular/material';

import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('NavigationComponent', () => {

  let navigationComponent: NavigationComponent;
  let navigationFixture: ComponentFixture<NavigationComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule
      ],
      declarations: [
        NavigationComponent,
        SearchComponent,
        AuthorizationComponent,
        BasketComponent
      ],
      providers: [{ provide: SESSION_STORAGE }]
    }).compileComponents();
  }));

  beforeEach(() => {
    navigationFixture = TestBed.createComponent(NavigationComponent);
    navigationComponent = navigationFixture.componentInstance;

    debugElement = navigationFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(navigationComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(navigationComponent
      instanceof NavigationComponent)
      .toBeTruthy();
  });

});
