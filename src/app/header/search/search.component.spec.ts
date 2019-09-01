import { SearchComponent } from './search.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { MatMenuModule } from '@angular/material';


describe('Search Component', () => {

  let searchComponent: SearchComponent;
  let searchFixture: ComponentFixture<SearchComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [SearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    searchFixture = TestBed.createComponent(SearchComponent);
    searchComponent = searchFixture.componentInstance;

    debugElement = searchFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(searchComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(searchComponent
      instanceof SearchComponent)
      .toBeTruthy();
  });

});
