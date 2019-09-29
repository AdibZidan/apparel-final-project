import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginForm } from '../authorization/login/LoginForm';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })

export class LoginService {

  // private url = 'http://localhost:8080/user/login';
  public signInURL = 'http://localhost:3000/sign-in';

  constructor(private httpClient: HttpClient) { }

  sendSignInCredentials(credentialsToSend: LoginForm): Observable<any> {
    return this.httpClient.post<LoginForm>(this.signInURL, credentialsToSend, httpOptions);
  }
}
