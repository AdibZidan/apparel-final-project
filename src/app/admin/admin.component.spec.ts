import { AdminComponent } from './admin.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';

describe('Admin Component', () => {

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

  describe('Admin Component Properties', () => {

    it(`Should have 'genders' property`, () => {
      const expectedGendersProperty: string[] = [
        'male', 'female'
      ];
      const actualGendersProperty: string[] = adminComponent.genders;

      expect(actualGendersProperty).toEqual(expectedGendersProperty);
    });

    it(`Should have an undefined 'uploadForm' property before 'ngOnInit'`, () => {
      const actualUploadFormProperty: FormGroup = adminComponent.uploadForm;

      expect(actualUploadFormProperty).toBeUndefined();
    });

    it(`Should have an undefined 'selectedFile' property before 'ngOnInit'`, () => {
      const actualSelectedFileProperty = adminComponent.selectedFile;

      expect(actualSelectedFileProperty).toBeUndefined();
    });

    it(`Should have an undefined 'formData' property before 'ngOnInit'`, () => {
      const actualFormDataProperty = adminComponent.formData;

      expect(actualFormDataProperty).toBeUndefined();
    });

  });

});
