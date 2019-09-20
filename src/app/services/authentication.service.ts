import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

  public isLoggedIn(): boolean {
    if (this.isUserLoggedIn() || this.isAdminLoggedIn()) {
      return this.getUserName();
    }
  }

  public isUserLoggedIn(): boolean {
    return sessionStorage.getItem('authority') === '"user';
  }

  public isAdminLoggedIn(): boolean {
    return sessionStorage.getItem('authority') === '"admin';
  }

  public getUserName(): boolean {
    return !!sessionStorage.getItem('username');
  }

}

/*
    if (!!sessionStorage.getItem('authority').includes('admin')) {
      return false;
    } else if (!!sessionStorage.getItem('authority').includes('user')) {
      return true;
    }
*/
