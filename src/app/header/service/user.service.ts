import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SignUpForm } from '../../forms/SignUpForm';

@Injectable({ providedIn: 'root' })

export class UserService {

  // private backEndLocalUrl: string = 'http://localhost:8080/user/signup';
  public backEndLocalUrl = 'http://localhost:3000/sign-up';

  constructor(private httpClient: HttpClient) { }

  addFormToBackEnd(formToAdd: SignUpForm): Observable<any> {
    return this.httpClient
      .post<SignUpForm>(this.backEndLocalUrl, formToAdd)
      .pipe(tap(() => console.log('Added your form to Back-End!')));
  }
}
