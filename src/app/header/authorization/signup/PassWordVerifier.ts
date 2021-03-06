import { AbstractControl } from '@angular/forms';

export class PasswordVerifier {

  public static PasswordValidator(abstractControl: AbstractControl): void {
    const password = abstractControl.get('password').value;
    const matchingPassword = abstractControl.get('matchingPassword').value;

    const isPasswordEmpty = (password: string, matchingPassword: string): boolean => {
      const isEmpty: boolean = !password.length && !matchingPassword.length;

      return isEmpty;
    };

    if (password !== matchingPassword || (isPasswordEmpty(password, matchingPassword))) {
      abstractControl.get('matchingPassword').setErrors({ PasswordVerifier: true });
    }
  }

}
