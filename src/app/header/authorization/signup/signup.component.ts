import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { PasswordVerifier } from './PassWordVerifier';

import { MatDialogRef } from '@angular/material';
import { UserService } from '../../service/user.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  public formGroup: FormGroup;
  public hidePassword = true;
  public isValidForm = false;
  public validPattern = '(?=.*\[0-9])(?=.*[a-z])(?=.*[A-Z]).*';
  public noSpacePattern = '[^ ]*';
  public noSpecialCharactersPattern = '[^-+_!@#$%^&*.,?]*';
  public passwordVerifier = PasswordVerifier.PasswordValidator;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<SignupComponent>,
    private userService: UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.onBuildForm();
  }

  public onBuildForm(): void {
    this.formGroup = this.getGroupedFormBuilder();

    this.formGroup
      .valueChanges
      .subscribe(() =>
        this.isValidForm = this.formGroup.valid);

    this.formGroup
      .controls
      .password
      .valueChanges
      .subscribe(() =>
        this.formGroup
          .controls
          .matchingPassword
          .updateValueAndValidity());
  }

  public getGroupedFormBuilder(): FormGroup {
    return this.formBuilder.group({
      userUuId: [''],
      username: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(this.noSpacePattern),
          Validators.pattern(this.validPattern)])],
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(this.validPattern),
          Validators.pattern(this.noSpacePattern),
          Validators.pattern(this.noSpecialCharactersPattern)])],
      matchingPassword: ['',
        [Validators.required]],
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.email])],
      address: [''],
      authority: ['user'],
      basket: [[]]
    }, { validators: this.passwordVerifier });
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.userService
        .addFormToBackEnd(this.formGroup.value)
        .subscribe(response => {
          if (response.message === 'Success!') {
            this.notificationService.onSuccess('Your account was registered!');
          } else if (response.message === 'Username is taken') {
            this.notificationService.onSuccess('This username is not available.');
          }
        });
      this.onClose();
    }
  }

  public onClose(): void {
    this.matDialogRef.close(this.formGroup.value);
  }

  public get username(): AbstractControl {
    return this.formGroup.get('username');
  }

  public get password(): AbstractControl {
    return this.formGroup.get('password');
  }

  public get matchingPassword(): AbstractControl {
    return this.formGroup.get('matchingPassword');
  }

  public get email(): AbstractControl {
    return this.formGroup.get('email');
  }

  public get address(): AbstractControl {
    return this.formGroup.get('address');
  }

  public noSpace(inputValue: string): boolean {
    const regularExpression = /\s/g;

    return regularExpression.test(inputValue);
  }

  public isLowerCased(inputValue: string): boolean {
    const regularExpression = /[a-z]/;

    return regularExpression.test(inputValue);
  }

  public isUpperCased(inputValue: string): boolean {
    const regularExpression = /[A-Z]/;

    return regularExpression.test(inputValue);
  }

  public hasANumber(inputValue: string): boolean {
    const regularExpression = /[0-9]/;

    return regularExpression.test(inputValue);
  }

  public noSpecialCharacters(inputValue: string): boolean {
    const regularExpression = /[!@#$%^&*(),.?":{}|<>]/;

    return regularExpression.test(inputValue);
  }

}
