import { HeaderComponent } from './header.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BasketComponent } from './basket/basket.component';

import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule, MatDividerModule, MatListModule, MatDialogModule } from '@angular/material';

import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('Header Component', () => {

  let headerComponent: HeaderComponent;
  let headerFixture: ComponentFixture<HeaderComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule
      ],
      declarations: [
        HeaderComponent,
        NavigationComponent,
        SearchComponent,
        AuthorizationComponent,
        BasketComponent
      ],
      providers: [{ provide: SESSION_STORAGE }]
    }).compileComponents();
  }));

  beforeEach(() => {
    headerFixture = TestBed.createComponent(HeaderComponent);
    headerComponent = headerFixture.componentInstance;

    debugElement = headerFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(headerComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(headerComponent
      instanceof HeaderComponent)
      .toBeTruthy();
  });

});
