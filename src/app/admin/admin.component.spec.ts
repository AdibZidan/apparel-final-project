import { AdminComponent } from './admin.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { DebugElement } from '@angular/core';

describe('AdminComponent', () => {

  let adminComponent: AdminComponent;
  let adminFixture: ComponentFixture<AdminComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      declarations: [AdminComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    adminFixture = TestBed.createComponent(AdminComponent);
    adminComponent = adminFixture.componentInstance;

    debugElement = adminFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () => {
    expect(adminComponent)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(adminComponent
      instanceof AdminComponent)
      .toBeTruthy();
  });

});
