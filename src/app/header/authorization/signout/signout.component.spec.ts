import { SignoutComponent } from './signout.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

describe('Signout Component', () => {

  let signoutComponent: SignoutComponent;
  let signoutFixture: ComponentFixture<SignoutComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    signoutFixture = TestBed.createComponent(SignoutComponent);
    signoutComponent = signoutFixture.componentInstance;

    debugElement = signoutFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(signoutComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(signoutComponent
      instanceof SignoutComponent)
      .toBeTruthy();
  });

});
