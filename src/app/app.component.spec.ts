import { AppComponent } from './app.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule, MatListModule, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SearchComponent } from './header/search/search.component';
import { AuthorizationComponent } from './header/authorization/authorization.component';
import { BasketComponent } from './header/basket/basket.component';

import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('Application Component', () => {

  let applicationComponent: AppComponent;
  let applicationFixture: ComponentFixture<AppComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatListModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        SearchComponent,
        AuthorizationComponent,
        BasketComponent
      ],
      providers: [
        { provide: SESSION_STORAGE },
        { provide: MAT_DIALOG_DATA }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    applicationFixture = TestBed.createComponent(AppComponent);
    applicationComponent = applicationFixture.componentInstance;

    debugElement = applicationFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should be created/be defined', () => {
    expect(applicationComponent)
      .toBeDefined();
  });

  it('Should exist/be compiled', () => {
    expect(applicationComponent
      instanceof AppComponent)
      .toBeTruthy();
  });

});
